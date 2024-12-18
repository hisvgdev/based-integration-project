import { Module } from '@nestjs/common';
import { ProductModule } from "./product/product.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./product/product.entity";
import { WbIntegrationModule } from './wb-integration/wb-integration.module';
import { Token } from "./wb-integration/token.entity";



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'mydatabase.db',
      entities: [Product, Token],
      synchronize: true,
    }),
    ProductModule,
    WbIntegrationModule,
  ],
})
export class AppModule { }
