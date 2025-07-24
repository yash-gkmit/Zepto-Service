import { Router } from 'express';
import userRoutes from './user.route';

export const router = Router();

router.use('/users', userRoutes);