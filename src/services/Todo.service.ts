import { Request } from "express";
import db from '../db/models';


class TodoService {

    body: Request['body'];
    params: Request['params'];

    constructor(req: Request) {
        this.body = req.body;
        this.params = req.params;
    }

    getAll = async () => {
        const DB: any = db;

        const todos = await DB.Todo.findAll({
            attributes: ['id', 'title', 'description', 'completed'],
        });

        return todos;
    }

    create = async () => {
        const DB: any = db;
        const todo = await DB.Todo.create(this.body);

        return todo;
    }

    getOne = async () => {
        const DB: any = db;

        const todo = await DB.Todo.findOne({
            where: {
                id: this.params.id,
            },
            attributes: ['id', 'title', 'description', 'completed'],
        });

        return todo;
    }

    update = async () => {
        const DB: any = db;

        const todo = await DB.Todo.update(this.body, {
            where: {
                id: this.params.id,
            },
        });

        return todo;
    }

    delete = async () => {
        const DB: any = db;

        const todo = await DB.Todo.destroy({
            where: {
                id: this.params.id,
            },
        });

        return todo;
    }
}


export default TodoService;