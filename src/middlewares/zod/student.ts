import { z } from "zod";
import { prisma } from "../../prisma/prisma";

export const AddStudentSchema = z.object({
  firstName: z.string().trim().min(1, "Dean's first name is required"),
  lastName: z.string().trim().min(1, "Dean's last name is required"),

  email: z
    .string()
    .email("Invalid email format")
    .refine(
      async (val) => {
        const exists = await prisma.user.findUnique({ where: { email: val } });
        return !exists;
      },
      { message: "Email is already in use" }
    ),

  gender: z.enum(["Male", "Female"], {
    required_error: "Gender is required",
    invalid_type_error: 'Gender must be "Male" or "Female"',
  }),

  password: z.string().min(5, "Password must be at least 5 characters"),
  regNo: z
    .string()
    .trim() 
    .nonempty("Reg number required") 
    .regex(/^[0-9]\d*$/, "Reg number must be a positive whole number"),

  phone: z.string().refine(
    (val) =>
      !val ||
      z
        .string()
        .regex(/^\+?\d{6,15}$/)
        .safeParse(val).success,
    { message: "Invalid phone number format" }
  ),

  dateOfBirth: z
    .preprocess((val) => {
      if (val instanceof Date) return val;
      if (typeof val === "string") return new Date(val);
      return val;
    }, z.date({ required_error: "Date of birth is required", invalid_type_error: "Invalid date format" }))
    .refine((d) => !isNaN(d.getTime()), { message: "Invalid date format" }),
});

export type AddStudentDto = z.infer<typeof AddStudentSchema>;
