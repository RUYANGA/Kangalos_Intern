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

  phone: z.string().refine((val) => !val || z.string().regex(/^\+?\d{6,15}$/).safeParse(val).success,
  { message: 'Invalid phone number format' }),

  dateOfBirth: z.preprocess(
  (val) => {
    if (val instanceof Date) return val;
    if (typeof val === 'string') return new Date(val);
    return val; 
  },
  z.date({ required_error: 'Date of birth is required', invalid_type_error: 'Invalid date format' })
).refine(
  (d) => !isNaN(d.getTime()),
  { message: 'Invalid date format' }
),

  jobTitle: z.string().trim().min(1, "Dean's job title is required"),
});

// DTO type
export type AddCollegeDto = z.infer<typeof AddCollegeSchema>;
