
import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";

export function validateBody(schema: ZodSchema<any>) {
  return (req: Request, res: Response, next: NextFunction):void => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({
        message: "Validation failed",
        errors: result.error.flatten().fieldErrors,
      });
    }

    req.body = result.data; // replace with parsed data
    next();
  };
}
