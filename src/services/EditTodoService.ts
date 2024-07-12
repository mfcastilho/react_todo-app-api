import { EditTodoDTO } from "../dto";
import { Todo } from "@/entities/Todo";
import TodoRepository from "../repositories/todo.repository";

export class EditTodoService {
  async execute({title, completed}: EditTodoDTO, id: number): Promise<Todo> {
    const updateData: Partial<Todo> = {};

    if (title !== undefined) {
      updateData.title = title;
    }

    if (completed !== undefined) {
      updateData.completed = completed;
    }

    const editedTodo = await TodoRepository.update({
      where: { id },
      data: updateData,
    });

    return editedTodo;
  }
}