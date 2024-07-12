import TodoRepository from "../repositories/todo.repository";

export class DeleteTodoService {
  async execute(id: number): Promise<void> {
    await TodoRepository.delete({
      where: { id }
    });
  }
}