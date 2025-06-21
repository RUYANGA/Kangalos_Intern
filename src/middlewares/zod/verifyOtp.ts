import { z } from 'zod';
import { prisma } from '../../prisma/prisma';

export const VerifyOtpZ = z.object({
  email: z
    .string()
    .email('Provide a valid email')
    .transform((v) => v.toLowerCase())
    .refine(async (val) => {
      const user = await prisma.user.findUnique({ where: { email: val } });
      if (!user) throw new Error('User with email not found!');
      if ((user as any).status === 'ACTIVE') {
        throw new Error('User with email already verified!');
      }
      return true;
    }),

  otp: z
    .string()
    .min(1, 'Provide OTP code'),
});

export type VerifyOtpDto = z.infer<typeof VerifyOtpZ>;
