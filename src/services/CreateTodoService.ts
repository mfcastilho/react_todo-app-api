import { TodoDTO } from "@/dto/TodoDTO";
import { Todo } from "@/entities/Todo";
import TodoRepository from "../repositories/todo.repository";


export class CreateTodoService {
  async execute({userId, title, completed}: TodoDTO): Promise<Todo> {
    const createdTodo = await TodoRepository.create({
      data: { userId, title, completed }
    });

    return createdTodo;
  }
}