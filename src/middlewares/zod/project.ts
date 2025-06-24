import { z } from 'zod';

export const CreateProjectSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  initiatedFrom: z.string().min(3),
  beneficialist: z.string().min(3),
  userId: z.string().uuid(), // ensure it’s a valid UUID
});
export const UpdateProjectSchema = z.object({
  id: z.string().uuid(), // ensure it’s a valid UUID
  title: z.string().min(3).optional(),
  description: z.string().min(10).optional(),
  initiatedFrom: z.string().min(3).optional(),
  beneficialist: z.string().min(3).optional(),
  userId: z.string().uuid().optional(), // ensure it’s a valid UUID
});
export const GetProjectByIdSchema = z.object({
  id: z.string().uuid(), // ensure it’s a valid UUID
});
export const GetProjectsByUserIdSchema = z.object({
  userId: z.string().uuid(), // ensure it’s a valid UUID
});
export const GetProjectsByStatusSchema = z.object({
  status: z.enum(['NOT_SUBMITTED', 'SUBMITTED', 'APPROVED', 'REJECTED', 'IN_PROGRESS', 'COMPLETED']),
});