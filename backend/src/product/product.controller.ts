import { Controller, Get, Post } from '@nestjs/common';
import { ProductService } from "./product.service";

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Get()
  async getProducts() {
    return this.productService.getProducts();
  }

  @Post('update')
  async updateProducts() {
    return this.productService.updateProducts();
  }
}