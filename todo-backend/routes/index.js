const routes = require('express').Router();
const TodoController = require('../controllers/todo');



//routes Todos
let prefix_todos ='/todos';
routes.get(prefix_todos+'/', TodoController.index);
routes.get(prefix_todos+'/:id', TodoController.show);
routes.post(prefix_todos+'/add', TodoController.store);
routes.put(prefix_todos+'/update/:id', TodoController.update);
routes.delete(prefix_todos+'/delete/:id', TodoController.destroy);
//!routes Todos

module.exports =  routes;
