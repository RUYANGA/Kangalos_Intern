// src/controllers/Admin/schools.ts
import { Request, Response, NextFunction } from 'express';
import { prisma } from '../../prisma/prisma';
import bcrypt from 'bcrypt';
import { AddSchoolDto, AddSchoolSchema } from '../../middlewares/zod/school';

export async function addSchool(
  req: Request<{ id: string }, {}, AddSchoolDto>,
  res: Response,
  next: NextFunction
): Promise<any> {
  try {
    const result = await AddSchoolSchema.safeParseAsync(req.body);
    if (!result.success) {
      return res.status(400).json({
        errors: result.error.flatten().fieldErrors,
      });
    }

    const data = result.data;
    const collegeId = req.params.id;

    if (!collegeId) {
      return res.status(400).json({ error: 'College id not provided' });
    }

    const college = await prisma.college.findUnique({
      where: { id: collegeId },
    });

    if (!college) {
      return res.status(404).json({ error: 'College to add school not found' });
    }

    const hashedPassword = await bcrypt.hash(data.password, 12);

    const school = await prisma.school.create({
      data: {
        name: data.name,
        description: data.description,
        college: {
          connect: { id: collegeId },
        },
        dean: {
          create: {
            firstName: data.firstName,
            lastName: data.lastName,
            dateOfBirth: new Date(data.dateOfBirth),
            email: data.email,
            password: hashedPassword,
            gender: data.gender,
            phone: data.phone,
            staffProfile: {
              create: {
                jobTitle: data.jobTitle,
              },
            },
            role: 'DEAN',
          },
        },
      },
      include: {
        college: true,
        dean: true,
      },
    });

    return res.status(201).json({
      message: 'School created successfully',
      school,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Error adding school',
      details: error instanceof Error ? error.message : error,
    });
  }
}
