import { Todo } from "../entities/Todo";
import TodoRepository from "../repositories/todo.repository";



export class GetAllTodosService {
  async execute(userId?: string, completed?: string): Promise<Todo[]> {
    const filters: { userId?: number, completed?: boolean } = {};

    if (userId) {
      filters.userId = Number(userId);
    }

    if (completed) {
      filters.completed = completed === 'string';
    }

    const todos = await TodoRepository.findMany({
      where: {
        userId: filters.userId,
        completed: filters.completed ?? undefined,
      }
    });

    return todos;
  }
}