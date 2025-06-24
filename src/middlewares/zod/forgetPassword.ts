import { z } from "zod";
import { prisma } from "../../prisma/prisma";


export const forgetPasswordSchem = z.object({
  email: z.string().email('Invalid email format').transform((v) => v.toLowerCase()),
  password: z.string().min(1, 'Password required!'),
}).superRefine(async (data, ctx) => {
  const user = await prisma.user.findUnique({ where: { email: data.email } });

  if (!user) {
    ctx.addIssue({
      path: ['email'],
      code: z.ZodIssueCode.custom,
      message: 'User not found',
    });
    return;
  }

 
});

export type forgetPasswordDto = z.infer<typeof forgetPasswordSchem>;