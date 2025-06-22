import { z } from 'zod';
import { prisma } from '../../prisma/prisma';

export const VerifyOtpZ = z.object({
  
  email: z
    .string()
    .email('Provide a valid email')
    .transform((v) => v.toLowerCase()),
  otp: z.string({ required_error: 'Otp required' }).min(1, 'Otp required'),
}).superRefine(async (data, ctx) => {
  const user = await prisma.user.findUnique({ where: { email: data.email } });

  if (!user) {
    ctx.addIssue({
      path: ['email'],
      code: z.ZodIssueCode.custom,
      message: 'User with email not found!',
    });
    return;
  }

  if (user.status === 'ACTIVE') {
    ctx.addIssue({
      path: ['email'],
      code: z.ZodIssueCode.custom,
      message: 'User already verified!',
    });
  }
});

// Typed export of the inferred type
export type VerifyOtpDto = z.infer<typeof VerifyOtpZ>;
