import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';

const JWT_KEY = process.env.JWT_KEY || 'mydefaultkeyisruyanga';
const prisma = new PrismaClient();

interface JwtPayloadWithId extends jwt.JwtPayload {
  id: string;
}

export const AuthorizeRoles = (allowedRoles:string[]) => {

  return async (req: Request, res: Response, next: NextFunction): Promise<any> => {

    try {

      const authHeader = req.headers['authorization'];
      const token = authHeader?.split(' ')[1];

      if (!token) return res.status(401).json({ message: 'Your are not login , please login first' });

      const decoded = jwt.verify(token, JWT_KEY) as JwtPayloadWithId;

      const user = await prisma.user.findUnique({
        where: { id: decoded.id },
      });

      if (!user) return res.status(404).json({ message: 'User not found' });

      // Check if user's role is allowed
      if (!allowedRoles.includes(user.role)) {
        return res.status(403).json({ message: 'Access denied: insufficient permissions' });
      }

      // Optional: attach user info to request
      (req as any).user = decoded.id;

      next();
    } catch (err) {
      console.error(err);
      return res.status(401).json({ message: 'Invalid or expired token' });
    }
  };
}; 



export const AuthorizeTeam= (allowedRoles:string[]) => {

    return async (req: Request, res: Response, next: NextFunction): Promise<any> => {

      try {
        
        const authHeader = req.headers['authorization'];
        const token = authHeader?.split(' ')[1];
  
        if (!token) return res.status(401).json({ message: 'Your are not login , please login first' });
  
        const decoded = jwt.verify(token, JWT_KEY) as JwtPayloadWithId;
  
        const user = await prisma.user.findUnique({
          where: { id: decoded.id },
        });
  
        if (!user) return res.status(404).json({ message: 'User not found' });
  
        // Check if user's role is allowed
        if (!allowedRoles.includes(user.roleInTeam)) {
          return res.status(403).json({ message: 'Access denied: insufficient permissions' });
        }
  
        // Optional: attach user info to request
        (req as any).user = decoded.id;
  
        next();
      } catch (err) {
        console.error(err);
        return res.status(401).json({ message: 'Invalid or expired token' });
      }
    };
  }; 