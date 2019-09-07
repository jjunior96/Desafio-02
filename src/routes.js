import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionCrontroller from './app/controllers/SessionsController';

const routes = new Router();

routes.post('/users', UserController.store);

routes.post('/sessions', SessionCrontroller.store);

export default routes;
