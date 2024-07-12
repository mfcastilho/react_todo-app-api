
import GetTodoController from '../controllers/GetTodoController';
import { GetAllTodosController } from '../controllers';
import { Router } from 'express';
import { verifyIfTodoExists } from '../middlewares';

const todoRoutes = Router();

todoRoutes.get('', GetAllTodosController.handle);
todoRoutes.get('/:id', verifyIfTodoExists, GetTodoController.handle);
todoRoutes.post('');
todoRoutes.patch('/:id');
todoRoutes.delete('/:id');

export default todoRoutes;