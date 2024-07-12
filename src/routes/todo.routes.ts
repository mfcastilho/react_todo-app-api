
import GetTodoController from '../controllers/GetTodoController';
import { CreateTodoController, GetAllTodosController } from '../controllers';
import { Router } from 'express';
import { verifyIfTodoExists, verifyTodoFields } from '../middlewares';

const todoRoutes = Router();

todoRoutes.get('', GetAllTodosController.handle);
todoRoutes.get('/:id', verifyIfTodoExists, GetTodoController.handle);
todoRoutes.post('', verifyTodoFields, CreateTodoController.handle);
todoRoutes.patch('/:id');
todoRoutes.delete('/:id');

export default todoRoutes;