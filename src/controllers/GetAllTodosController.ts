import { Filters } from '@/types/Filters';
import { GetAllTodosService } from '../services';
import { Request, Response } from 'express';


class GetAllTodosController {
  async handle(req: Request, res: Response) {
    const { userId, completed }: Filters = req.query;

    const service = new GetAllTodosService();

    const todos = await service.execute(userId, completed);

    return res.status(200).json(todos);
  }
}

export default new GetAllTodosController();
