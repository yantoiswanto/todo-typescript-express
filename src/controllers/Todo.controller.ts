import { Request, Response } from "express";
import IController from "./ControllerInterface";
import TodoService from "../services/Todo.service";

class TodoController implements IController {

    index = async (req: Request, res: Response): Promise<Response> => {
        try {
            const service: TodoService = new TodoService(req);
            const todos = await service.getAll();

            return res.send({
                data: todos,
                message: "Success Get All Todo List"
            });
        } catch (error) {
            return res.send(error)
        }
    }


    create = async (req: Request, res: Response): Promise<Response> => {
        try {
            const service: TodoService = new TodoService(req);
            const todo = await service.create();
            console.log(todo);
            return res.send({
                data: todo,
                message: "Create Todo Success"
            })
        } catch (error) {
            return res.send(error)
        }

    }

    show = async (req: Request, res: Response): Promise<Response> => {
        try {
            const service: TodoService = new TodoService(req);
            const todo = await service.getOne();
            return res.send({
                data: todo,
                message: "Get Todo by id => " + todo.id
            })
        } catch (error) {
            return res.send(error);
        }

    }

    update = async (req: Request, res: Response): Promise<Response> => {
        try {
            const service: TodoService = new TodoService(req);
            const todo = await service.update();

            return res.send({
                message: `Update Todo success`
            })
        } catch (error) {
            return res.send(error);
        }
    }

    delete = async (req: Request, res: Response): Promise<Response> => {
        try {
            const service: TodoService = new TodoService(req);
            const todo = await service.delete();

            return res.send({
                message: "Delete Todo Success"
            })
        } catch (error) {
            return res.send(error);
        }
    }
}

export default new TodoController;