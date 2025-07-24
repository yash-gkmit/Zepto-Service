import { Request, Response, NextFunction } from 'express';
import { logger } from '../config/logger';

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    const status = err.status || 400; // Use 400 for validation errors
    const message = err.message || 'Internal server error';
    logger.error(message, err);
    res.status(status).json({
      message,
      status,
    });
  };