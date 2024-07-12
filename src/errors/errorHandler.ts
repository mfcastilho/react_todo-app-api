import { Request, Response, NextFunction } from 'express';
import { AppError } from './AppError';

export async function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ statusCode: err.statusCode, message: err.message });
  }

  return res.status(500).json({ message: 'Internal Server Error' });
}
