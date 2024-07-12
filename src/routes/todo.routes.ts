import { CreateTodoController, GetAllTodosController, EditTodoController, GetTodoController } from '../controllers';
import { Router } from 'express';
import { verifyIfIdIsANumber, verifyIfTodoExists, verifyTodoFields } from '../middlewares';

const todoRoutes = Router();

todoRoutes.get('', GetAllTodosController.handle);
todoRoutes.get('/:id', verifyIfIdIsANumber, verifyIfTodoExists, GetTodoController.handle);
todoRoutes.post('', verifyTodoFields, CreateTodoController.handle);
todoRoutes.patch('/:id', verifyIfIdIsANumber, verifyIfTodoExists, EditTodoController.handle);
todoRoutes.delete('/:id');

export default todoRoutes;