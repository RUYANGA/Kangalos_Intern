// src/middlewares/Auth/zodValidateParams.ts
import { Request, Response, NextFunction } from 'express';
import { ZodSchema } from 'zod';

export const zodValidateParams =
  (schema: ZodSchema) =>
  async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
      req.params = await schema.parseAsync(req.params);
      next();
    } catch (err) {
      const zErr = err as any;
      return res.status(400).json({
        errors: zErr.errors.map((e: any) => ({ message: e.message })),
      });
    }
  };
