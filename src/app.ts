import express from 'express';
import { config } from 'dotenv';
import todoRoutes from './routes/todo.routes';
import { errorHandler } from './errors';
config();

const app = express();

app.use(express.json());

app.use('/todos', todoRoutes);

app.use(errorHandler);

export default app;