import { Todo } from "../entities/Todo";
import TodoRepository from "../repositories/todo.repository";


export class GetAllTodosService {
  async execute(): Promise<Todo[]> {
    const todos = await TodoRepository.findMany();

    return todos;
  }
}