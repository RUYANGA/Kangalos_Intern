import { z } from 'zod';
import { prisma } from '../../prisma/prisma';

const phoneRegex = /^\+?\d{6,15}$/;

export const SignUpZ = z.object({
  firstName: z
    .string()
    .trim()
    .min(3, 'First name must be at least 3 characters'),

  lastName: z
    .string()
    .trim()
    .min(3, 'Last name must be at least 3 characters'),

  phone: z
    .string()
    .trim()
    .regex(phoneRegex, 'Invalid phone number, e.g. +250780905910 or 0780905910'),

  email: z
    .string()
    .email('Invalid email format')
    .transform((v) => v.toLowerCase())
    .refine(async (val) => {
      const user = await prisma.user.findUnique({ where: { email: val } });
      return !user;
    }, { message: 'User with email already exists' }),

  password: z
    .string()
    .min(5, 'Password must be at least 5 characters'),

  gender: z.enum(['Male', 'Female'], {
    required_error: 'Gender required !',
    invalid_type_error: 'Gender must be "Male" or "Female"',
  }),

  dateOfBirth: z
    .string()
    .refine((v) => !isNaN(new Date(v).getTime()), {
      message: 'Date of birth is not valid',
    })
    .transform((v) => new Date(v)),
});

// Handy TypeScript alias for controllers / services
export type SignUpDto = z.infer<typeof SignUpZ>;