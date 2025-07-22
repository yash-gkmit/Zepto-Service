import { createConnection } from 'typeorm';
import { User } from '../entities/user.entity';
import { Product } from '../entities/product.entity';

export const connectDB = async () => {
  return createConnection({
    type: 'postgres',
    url: 'postgres://pgsql:12345678@localhost:5432/zepto',
    entities: [User, Product],
    synchronize: true,
    logging: false,
  });
};