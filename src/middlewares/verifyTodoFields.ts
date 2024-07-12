import { AppError } from '../errors/AppError';
import { Request, Response, NextFunction } from 'express';

export const verifyTodoFields = (req: Request, res: Response, next: NextFunction) => {
  const { userId, title, completed } = req.body;

  if (!userId || !title.trim() || completed === undefined) {
    throw new AppError('All fields are required', 400);
  }

  if (isNaN(userId)) {
    throw new AppError('The userId field must be of numeric type', 400);
  }

  if (typeof completed !== 'boolean') {
    throw new AppError('The userId field must be of boolean type', 400);
  }

  return next();
}