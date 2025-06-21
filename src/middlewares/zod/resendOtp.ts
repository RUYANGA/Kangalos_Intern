import { z } from 'zod';
import { prisma } from '../../prisma/prisma';

export const ResendOtpZ = z.object({
  email: z
    .string()
    .email('Please enter a valid email')
    .transform((v) => v.toLowerCase())
    .refine(async (val) => {
      const user = await prisma.user.findUnique({ where: { email: val } });
      if (!user) return false;
      if ((user as any).status === 'ACTIVE') {
        throw new Error('Email already verified');
      }
      return true;            // user exists & not yet verified
    }, { message: 'User with email not found' }),
});

// Alias
export type ResendOtpDto = z.infer<typeof ResendOtpZ>;
