import { z } from 'zod';
import { prisma } from '../../prisma/prisma';

export const AddDepartmentSchema = z.object({
    
  // Department
  name       : z.string().trim().min(1, 'Department name is required'),
  description: z.string().trim().min(1, 'Department description is required'),

  // HOD
  
  firstName: z.string().trim().min(1, "Dean's first name is required"),
  lastName : z.string().trim().min(1, "Dean's last name is required"),

  email: z.string().email('Invalid email format')
    .refine(async (val) => {
      const exists = await prisma.user.findUnique({ where: { email: val } });
      return !exists;
    }, { message: 'Email is already in use' }),

  gender: z.enum(['Male', 'Female'], {
    required_error: 'Gender is required',
    invalid_type_error: 'Gender must be "Male" or "Female"',
  }),

  password: z.string().min(5, 'Password must be at least 5 characters'),

  phone: z.string().optional()
    .refine((val) => !val || z.string().regex(/^\+?\d{6,15}$/).safeParse(val).success,
      { message: 'Invalid phone number format' }),

  dateOfBirth: z.string()
    .refine((val) => !isNaN(new Date(val).getTime()), {
      message: 'Date must be in ISO8601 format (YYYY-MM-DD)',
    })
    .transform((val) => new Date(val)),

  jobTitle: z.string().trim().min(1, "Dean's job title is required"),
});

export type AddDepartmentDto = z.infer<typeof AddDepartmentSchema>;