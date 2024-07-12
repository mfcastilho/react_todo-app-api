import { CreateTodoService } from '../services';
import { Request, Response } from 'express';

class CreateTodoController {
  async handle(req: Request, res: Response) {
    const service = new CreateTodoService();

    const createdTodo = await service.execute(req.body);

    return res.status(201).json({ statusCode: 201, data: createdTodo });
  }
}

export default new CreateTodoController();