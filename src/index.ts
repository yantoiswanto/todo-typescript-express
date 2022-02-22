import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import { config as dotenv } from 'dotenv';

//Routes
import TodoRouter from './routes/Todo.router';

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.plugins();
        this.routes();
        dotenv();
    }


    protected plugins(): void {
        this.app.use(bodyParser.json());
        this.app.use(morgan('dev'));
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
    }

    protected routes(): void {
        this.app.route('/').get((req: Request, res: Response) => {
            res.send('Api Todo List - v1.0.0');
        });

        this.app.use('/api/v1/todos', TodoRouter);
    }
}

const port: number = Number(process.env.PORT) || 3000
const app = new App().app;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

