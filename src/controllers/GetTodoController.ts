import { GetTodoService } from '../services';
import { Request, Response } from 'express';

class GetTodoController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const service = new GetTodoService();

    const todo = service.execute(Number(id));

    return res.status(200).json({statusCode: 200, todo});
  }
}

export default new GetTodoController();