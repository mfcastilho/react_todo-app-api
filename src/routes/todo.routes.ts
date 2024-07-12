import { Router } from 'express';

const todoRoutes = Router();

todoRoutes.get('');
todoRoutes.get('/:id');
todoRoutes.post('');
todoRoutes.patch('/:id');
todoRoutes.delete('/:id');

export default todoRoutes;