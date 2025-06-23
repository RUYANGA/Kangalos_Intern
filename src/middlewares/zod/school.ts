// src/middlewares/zod/AddSchoolSchema.ts
import { z } from 'zod';
import { prisma } from '../../prisma/prisma';

const phoneRegex = /^\+?\d{6,15}$/;

export const AddSchoolSchema = z.object({
  name: z.string().trim().min(1, 'School name is required'),
  description: z.string().trim().min(1, 'School description is required'),

  firstName: z.string().trim().min(1, "Dean's first name is required"),
  lastName: z.string().trim().min(1, "Dean's last name is required"),

  email: z.string().trim().email('Invalid email format'),

  gender: z.enum(['Male', 'Female'], {
    required_error: 'Gender is required',
    invalid_type_error: 'Gender must be "Male" or "Female"',
  }),

  password: z.string().min(5, 'Password must be at least 5 characters'),

  phone: z.string().refine(
    (val) => !val || phoneRegex.test(val),
    { message: 'Invalid phone number format' }
  ),

    dateOfBirth: z.preprocess(
    (val) => {
      if (val instanceof Date) return val;
      if (typeof val === 'string') {
        // Accept both YYYY-MM-DD and YYYY/MM/DD
        const normalized = val.replace(/\//g, '-');
        return new Date(normalized);
      }
      return val;
    },
    z.date({
      required_error: 'Date of birth is required',
      invalid_type_error: 'Invalid date format',
    })
  ).refine((d) => !isNaN(d.getTime()), {
    message: 'Invalid date format',
  }),

  jobTitle: z.string().trim().min(1, "Dean's job title is required"),
}).superRefine(async (data, ctx) => {
  const [school, user] = await Promise.all([
    prisma.school.findFirst({ where: { name: data.name } }),
    prisma.user.findUnique({ where: { email: data.email } }),
  ]);

  if (school) {
    ctx.addIssue({
      path: ['name'],
      code: z.ZodIssueCode.custom,
      message: 'A school with this name already exists',
    });
  }

  if (user) {
    ctx.addIssue({
      path: ['email'],
      code: z.ZodIssueCode.custom,
      message: 'Email is already in use',
    });
  }
});

export type AddSchoolDto = z.infer<typeof AddSchoolSchema>;
