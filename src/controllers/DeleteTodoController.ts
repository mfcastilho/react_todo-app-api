import { DeleteTodoService } from '../services';
import { Request, Response } from 'express';

class DeleteTodoController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const service = new DeleteTodoService();

    await service.execute(Number(id));

    return res.status(204).json();
  }
}

export default new DeleteTodoController();