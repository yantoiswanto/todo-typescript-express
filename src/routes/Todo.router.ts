import BaseRouter from './Base.router';
import validate from '../middlewares/TodoValidation';

import TodoController from '../controllers/Todo.controller';

class TodoRouter extends BaseRouter {
    public routes(): void {
        this.router.get('/', TodoController.index);
        this.router.post('/', validate, TodoController.create);
        this.router.get('/:id', TodoController.show);
        this.router.put('/:id', validate, TodoController.update);
        this.router.delete('/:id', TodoController.delete);
    }
}

export default new TodoRouter().router;