import { z } from 'zod';
import { prisma } from '../../prisma/prisma';

export const AddUniversitySchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'University name is required')
    .refine(async (val) => {
      const uni = await prisma.university.findUnique({ where: { name: val } });
      return !uni;
    }, { message: 'University with this name already exists' }),

  location: z
    .string()
    .trim()
    .min(1, 'University location is required'),

  description: z
    .string()
    .trim()
    .min(1, 'University description is required'),
});

// The TypeScript inference you can reuse elsewhere:
export type AddUniversityDto = z.infer<typeof AddUniversitySchema>;
