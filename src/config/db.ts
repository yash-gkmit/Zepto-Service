import { DataSource } from 'typeorm';
import { User } from '../entities/user.entity';
import { Product } from '../entities/product.entity';
import { logger } from './logger';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL || 'postgres://pgsql:12345678@localhost:5432/zepto',
  synchronize: true, 
  logging: false,
  entities: [User, Product],
  migrations: [],
  subscribers: [],
});

export const connectDB = async () => {
  try {
    await AppDataSource.initialize();
    logger.info('DataSource has been initialized!');
  } catch (err) {
    logger.error('Error during DataSource initialization', err);
    throw err;
  }
};