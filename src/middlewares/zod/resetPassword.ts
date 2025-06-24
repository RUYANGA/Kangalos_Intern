import { z } from "zod";
import { prisma } from "../../prisma/prisma";


export const resetPasswordSchem = z.object({
  password: z.string().min(1, 'Password required!'),
});

export type resetPasswordDto = z.infer<typeof resetPasswordSchem>;