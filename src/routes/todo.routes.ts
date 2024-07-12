import { CreateTodoController, GetAllTodosController, EditTodoController, GetTodoController, DeleteTodoController } from '../controllers';
import { Router } from 'express';
import { verifyIfIdIsANumber, verifyIfTodoExists, verifyTodoFields } from '../middlewares';

const todoRoutes = Router();

todoRoutes.get('', GetAllTodosController.handle);
todoRoutes.get('/:id', verifyIfIdIsANumber, verifyIfTodoExists, GetTodoController.handle);
todoRoutes.post('', verifyTodoFields, CreateTodoController.handle);
todoRoutes.patch('/:id', verifyIfIdIsANumber, verifyIfTodoExists, EditTodoController.handle);
todoRoutes.delete('/:id', verifyIfIdIsANumber, verifyIfTodoExists, DeleteTodoController.handle);

export default todoRoutes;