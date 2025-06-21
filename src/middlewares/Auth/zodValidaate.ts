import { Request, Response, NextFunction } from 'express';
import { ZodSchema } from 'zod';

export const zodValidate =
  (schema: ZodSchema) =>
  async (req: Request, res: Response, next: NextFunction):Promise<any> => {
    try {
      req.body = await schema.parseAsync(req.body); // ← mutated to parsed data
      next();
    } catch (err) {
      const zErr = err as any;
      return res.status(400).json({
        errors: zErr.errors.map((e: any) => ({ message: e.message })),
      });
    }
  };
