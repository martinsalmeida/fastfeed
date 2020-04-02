import { Router } from 'express';
import authMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientsController from './app/controllers/RecipientsController';

const routes = new Router();

routes.get('/', UserController.index);
routes.post('/', SessionController.store);

routes.get('/recipients', authMiddleware, RecipientsController.index);
routes.post('/recipients', authMiddleware, RecipientsController.store);
routes.put('/recipients/:id', authMiddleware, RecipientsController.update);

export default routes;
