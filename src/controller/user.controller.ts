import { Request, Response, NextFunction } from 'express';
import { UserService } from '../services/user.service';

export class UserController {
  async signup(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await new UserService().register(req.body);
      res.status(201).json(result);
    } catch (err: any) {
      next(err);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await new UserService().login(req.body);
      res.json(result);
    } catch (err: any) {
      next(err);
    }
  }
}