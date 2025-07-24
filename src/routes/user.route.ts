import { Router } from 'express';
import { UserController } from '../controller/user.controller';

const router = Router();
const userController = new UserController();

// router.post('/signup', userController.signup);
router.post('/register', userController.signup); // New route for /api/register
router.post('/login', userController.login);

export default router;