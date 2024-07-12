import { AppError } from '../errors/AppError';
import { Request, Response, NextFunction } from 'express';

export const verifyIfIdIsANumber = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  if (isNaN(Number(id))) {
    throw new AppError('The id must be a numeric type', 400);
  }

  return next();
}