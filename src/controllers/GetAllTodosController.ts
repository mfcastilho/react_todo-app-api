
import { GetAllTodosService } from '../services';
import {Request, Response } from 'express';

class GetAllTodosController {
  async handle(req: Request, res: Response) {
    const service = new GetAllTodosService();

    const todos = await service.execute();

    return res.status(200).json(todos);
  }
}

export default new GetAllTodosController();