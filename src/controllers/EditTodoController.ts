import { EditTodoService } from '../services';
import { Request, Response } from 'express';

class EditTodoController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const service = new EditTodoService();

    const editedTodo = await service.execute(req.body, Number(id));

    return res.status(200).json({ statusCode: 200, data: editedTodo });
  }
}

export default new EditTodoController();