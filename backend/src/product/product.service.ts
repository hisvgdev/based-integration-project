import { HttpService } from "@nestjs/axios";
import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "./product.entity";
import { Repository } from "typeorm";
import { lastValueFrom } from "rxjs";
import * as https from 'https';
import { WbIntegrationService } from "src/wb-integration/wb-integration.service";

@Injectable()
export class ProductService {
  constructor(
    private readonly wbIntegrationService: WbIntegrationService,
    private readonly httpService: HttpService,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>
  ) { }

  // Метод для получения товаров с Wildberries
  async fetchWildberriesProduct() {
    try {
      // Достаем токен из сервиса который необходим для того чтобы прокинуть его в заголовок запроса
      const token = await this.wbIntegrationService.getToken();
      // Создаем переменную агента чтобы при подключении не ругались ошибки по типу CORS
      const agent = new https.Agent({
        rejectUnauthorized: false,
      });
      // Создаем запрос на получение контент от wildberries
      const response = await lastValueFrom(
        this.httpService.post('https://content-api.wildberries.ru/content/v2/get/cards/list?locale=ru', {
          // создаем обязательное к запросу тело для отправки его вместе с запросом на конечный breakpoint
          settings: {
            sort: {
              ascending: false
            },
            filter: {
              textSearch: "",
              allowedCategoriesOnly: true,
              tagIDs: [],
              objectIDs: [],
              brands: [],
              imtID: 0,
              withPhoto: -1
            },
            cursor: {
              limit: 100
            }
          }
        }, {
          // добавляем в заголовках агента и токен
          headers: { Authorization: `Bearer ${token}` },
          httpsAgent: agent,
        })
      );
      // формируем для удобства фронтенд приложению новый массив и отдаем его соответственно
      if (response.data && Array.isArray(response.data.cards)) {
        return response.data.cards.map((p) => ({
          subjectID: p.subjectID,
          parentID: p.parentID,
          title: p.subjectName || 'Untitled Product',
          description: p.description || 'No description available.',
          source: "Wildberries",
          parentCategory: p.parentName || 'Unknown Category',
          vendorCode: p.vendorCode || 'Unknown',
          brand: p.brand || 'Unknown',
          photos: p.photos || [],
          dimensions: p.dimensions || {},
          characteristics: p.characteristics || {},
          sizes: p.sizes || {},
        }));
        // если токен или что-то будет не обнаружено или не подключено выдаст ошибку но запрос сам пройдет
      } else {
        console.error('Invalid response structure from Wildberries:', response.data);
        return [];
      }
      // если запрос не пройдет отлавливаем это и показываем в консоле
    } catch (error) {
      console.error('Error while fetching Wildberries products:', error.response ? error.response.data : error.message);
      return [];
    }
  }

  // Метод получения складов wildberries

  async fetchGetWarehouseWildberriesProducts() {
    try {
      const token = await this.wbIntegrationService.getToken();
      const agent = new https.Agent({
        rejectUnauthorized: false
      })
      const response = await lastValueFrom(
        this.httpService.get('https://marketplace-api.wildberries.ru/api/v3/warehouses', {
          headers: { Authorization: `Bearer ${token}` },
          httpsAgent: agent,
        })
      )
      return response.data;
    } catch (error) {
      console.error("Error while fetching Wildberries Warehouse:", error.response ? error.response.data : error.message)
      return []
    }
  }

  // Метод для получения товаров с Ozon
  async fetchOzonProducts() {
    try {
      const response = await lastValueFrom(
        this.httpService.get('https://api-seller.ozon.ru/v2/products/stocks', {
          headers: {
            'Client-Id': '2116437',
            'Api-Key': '26e433e9-3a02-4d19-8664-15f0518b199c',
          },
        })
      );

      const stocks = response.data.stocks;

      if (Array.isArray(stocks)) {
        return stocks.map((stock) => ({
          subjectID: stock.product_id,
          parentID: null,
          title: stock.offer_id || 'Untitled Product',
          description: 'No description available.',
          source: "Ozon",
          parentCategory: 'Unknown Category',
          vendorCode: stock.offer_id || 'Unknown',
          brand: 'Unknown',
          photos: [],
          dimensions: {},
          characteristics: {},
          sizes: {},
        }));
      } else {
        console.error('Invalid response format:', response.data);
        return [];
      }
    } catch (error) {
      console.error('Error fetching Ozon products:', error);
      return [];
    }
  }

  async updateProducts() {
    const wbProducts = await this.fetchWildberriesProduct();
    // const ozonProducts = await this.fetchOzonProducts();

    const allProducts = [...wbProducts];

    if (allProducts.length === 0) {
      console.log('No products to update.');
      return [];
    }

    for (const productData of allProducts) {
      const existingProduct = await this.productRepository.findOne({
        where: { subjectID: productData.subjectID, source: productData.source },
      });

      if (existingProduct) {
        existingProduct.title = productData.title || existingProduct.title;
        existingProduct.description = productData.description || existingProduct.description;
        existingProduct.brand = productData.brand || existingProduct.brand;
        existingProduct.vendorCode = productData.vendorCode || existingProduct.vendorCode;
        existingProduct.photos = productData.photos || existingProduct.photos;
        existingProduct.dimensions = productData.dimensions || existingProduct.dimensions;
        existingProduct.characteristics = productData.characteristics || existingProduct.characteristics;
        existingProduct.sizes = productData.sizes || existingProduct.sizes;
        existingProduct.updatedAt = new Date();
        await this.productRepository.save(existingProduct);
      } else {
        // Создаем новый продукт
        const newProduct = this.productRepository.create({
          subjectID: productData.subjectID,
          parentID: productData.parentID || null,
          title: productData.title,
          description: productData.description || '',
          source: productData.source,
          parentCategory: productData.parentCategory || '',
          vendorCode: productData.vendorCode || '',
          brand: productData.brand || '',
          needKiz: productData.needKiz || false,
          photos: productData.photos || null,
          dimensions: productData.dimensions || null,
          characteristics: productData.characteristics || null,
          sizes: productData.sizes || null,
          createdAt: new Date(),
          updatedAt: new Date(),
        });

        console.log(`Creating new product: ${newProduct.title}`);
        await this.productRepository.save(newProduct);
      }
    }

    console.log('Products updated successfully.');
    return this.productRepository.find();
  }


  // Метод для получения всех товаров из базы данных
  async getProducts() {
    return this.productRepository.find();
  }
}
