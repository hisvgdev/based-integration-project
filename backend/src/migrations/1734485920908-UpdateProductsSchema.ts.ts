import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateProductsSchema1734485920908 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Drop the old table if it exists
        await queryRunner.query(`DROP TABLE IF EXISTS "products"`);

        // Now, create the new products table
        await queryRunner.query(`
      CREATE TABLE "products" (
        "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        "subjectID" INTEGER NOT NULL,
        "parentID" INTEGER,
        "title" TEXT NOT NULL,
        "description" TEXT NOT NULL,
        "source" TEXT NOT NULL,
        "parentCategory" TEXT,
        "vendorCode" TEXT NOT NULL,
        "brand" TEXT NOT NULL,
        "needKiz" BOOLEAN DEFAULT false,
        "photos" TEXT,
        "dimensions" TEXT,
        "characteristics" TEXT,
        "sizes" TEXT,
        "createdAt" TEXT,
        "updatedAt" TEXT
      );
    `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // If you want to rollback, drop the new table and recreate the old one (optional)
        await queryRunner.query(`DROP TABLE IF EXISTS "products"`);

        // Recreate the old table if needed
        await queryRunner.query(`
      CREATE TABLE "temporary_products" (
        "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        "subjectID" INTEGER NOT NULL,
        "parentID" INTEGER,
        "title" TEXT NOT NULL,
        "description" TEXT NOT NULL,
        "source" TEXT NOT NULL,
        "parentCategory" TEXT,
        "vendorCode" TEXT NOT NULL,
        "brand" TEXT NOT NULL,
        "needKiz" BOOLEAN DEFAULT false,
        "photos" TEXT,
        "dimensions" TEXT,
        "characteristics" TEXT,
        "sizes" TEXT,
        "createdAt" TEXT,
        "updatedAt" TEXT
      );
    `);
    }
}
