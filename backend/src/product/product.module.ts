import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./product.entity";
import { HttpModule } from "@nestjs/axios";
import { WbIntegrationModule } from "src/wb-integration/wb-integration.module";

@Module({
  imports: [TypeOrmModule.forFeature([Product]), HttpModule, WbIntegrationModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule { }