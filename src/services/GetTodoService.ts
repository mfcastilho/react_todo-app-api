import { Todo } from "../entities/Todo";
import TodoRepository from "../repositories/todo.repository";

export class GetTodoService {
  async execute(id: number): Promise<Todo | null> {
    const todo = await TodoRepository.findUnique({
      where: { id }
    });

    return todo;
  }
}