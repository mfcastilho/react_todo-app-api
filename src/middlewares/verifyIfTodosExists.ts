import { AppError } from '../errors/AppError';
import TodoRepository from '../repositories/todo.repository';
import { Request, Response, NextFunction } from 'express';

export const verifyIfTodoExists = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  const todo = await TodoRepository.findUnique({
    where: { id: Number(id) },
  });

  if (!todo) {
    throw new AppError('Todo not found.', 404);
  }

  return next();
}