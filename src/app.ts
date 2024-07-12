import express from 'express';
import 'express-async-errors';
import { config } from 'dotenv';
import todoRoutes from './routes/todo.routes';
import { errorHandler } from './errors';
import cors from 'cors';
config();

const app = express();

app.use(cors());

app.use(express.json());

app.use('/todos', todoRoutes);

app.use(errorHandler);

export default app;