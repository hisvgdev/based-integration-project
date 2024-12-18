import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number; // Идентификатор для базы данных

  @Column()
  subjectID: number; // ID товара из API

  @Column({ nullable: true })
  parentID: number; // ID родительской категории

  @Column()
  title: string; // Название товара

  @Column({ type: 'text' })
  description: string; // Описание товара

  @Column()
  source: string; // Источник данных (Wildberries или Ozon)

  @Column({ nullable: true })
  parentCategory: string; // Родительская категория (например, "Телевизоры и аудиотехника")

  @Column()
  vendorCode: string; // Код поставщика

  @Column()
  brand: string; // Бренд товара

  @Column({ default: false })
  needKiz: boolean; // Нужна ли маркировка КИЗ

  @Column('simple-json', { nullable: true })
  photos: any;

  @Column('simple-json', { nullable: true })
  dimensions: object; // JSON с размерами товара

  @Column('simple-json', { nullable: true })
  characteristics: object; // JSON с характеристиками товара

  @Column('simple-json', { nullable: true })
  sizes: object; // JSON с размерами товара

  @Column({ type: 'text', nullable: true })
  createdAt: Date; // Дата создания товара

  @Column({ type: 'text', nullable: true })
  updatedAt: Date; // Дата последнего обновления товара
}
