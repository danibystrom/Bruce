/*
  Warnings:

  - Added the required column `alcohol` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "alcohol" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "_CategoryToProduct" ADD CONSTRAINT "_CategoryToProduct_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_CategoryToProduct_AB_unique";
