import { z } from 'zod';
import { prisma } from '../../prisma/prisma';


export const LoginZ = z.object({
  email: z
    .string()
    .email('Invalid email format')
    .transform((v) => v.toLowerCase())
    .refine(async (val) => {
      const user = await prisma.user.findUnique({ where: { email: val } });
      if (!user) throw new Error('Email or password incorrect!');
      if ((user as any).status === 'INACTIVE') {
        throw new Error('Email not verified, please verify your email');
      }
      return true;
    }),

  password: z
    .string()
    .min(1, 'Password required!'),
});

export type LoginDto = z.infer<typeof LoginZ>;
