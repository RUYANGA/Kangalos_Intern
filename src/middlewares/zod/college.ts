import { z } from 'zod';
import { prisma } from '../../prisma/prisma';

const phoneRegex = /^\+?\d{6,15}$/;   // basic intl phone pattern

export const AddCollegeSchema = z.object({
    
  // College core fields
  name: z
    .string()
    .trim()
    .min(1, 'College name is required')
    .refine(async (val) => {
      const col = await prisma.college.findUnique({ where: { name: val } });
      return !col;
    }, { message: 'College with this name already exists' }),

  location: z
    .string()
    .trim()
    .min(1, 'College location is required'),

  description: z
    .string()
    .trim()
    .min(1, 'College description is required'),

  // Director / Principal fields
  firstName: z
    .string()
    .trim()
    .min(1, 'Director name is required'),

  email: z
    .string()
    .email('Valid email is required')
    .refine(async (val) => {
      const usr = await prisma.user.findUnique({ where: { email: val } });
      return !usr;
    }, { message: 'Email is already in use' }),

  gender: z.enum(['Male', 'Female'], {
    required_error: 'Gender is required',
    invalid_type_error: 'Gender must be either Male or Female',
  }),

  password: z
    .string()
    .min(5, 'Password must be at least 5 characters'),

  phone: z
    .string()
    .regex(phoneRegex, 'Phone must be a valid mobile number')
    .optional(),

  dateOfBirth: z
    .string()
    .refine((v) => !isNaN(new Date(v).getTime()), {
      message: 'Date of birth is not valid',
    })
    .transform((v) => new Date(v)),

  jobTitle: z
    .string()
    .trim()
    .min(1, 'Job title required'),
});

// DTO type
export type AddCollegeDto = z.infer<typeof AddCollegeSchema>;
