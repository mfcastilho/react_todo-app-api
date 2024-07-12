import { AppError } from '../errors/AppError';
import { Request, Response, NextFunction } from 'express';

export const verifyEditTodoFields = async (req: Request, res: Response, next: NextFunction) => {
  const { title, completed } = req.body;

  if (typeof title !== 'string') {
    throw new AppError('The title field must be string type', 400);
  }

  if (typeof completed !== 'boolean') {
    throw new AppError('The title field must be boolean type', 400);
  }

  return next();
}