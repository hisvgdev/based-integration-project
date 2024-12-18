import { DataSource } from 'typeorm';
import { Product } from './product/product.entity';
import { Token } from "./wb-integration/token.entity";

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'mydatabase.db',
  synchronize: false,
  entities: [Product, Token],
  migrations: ['src/migrations/*.ts'],
});
