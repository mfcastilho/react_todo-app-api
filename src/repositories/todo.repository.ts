import { prismaClient } from '../configs/database/prismaClient';

const TodoRepository = prismaClient.todo;

export default TodoRepository;