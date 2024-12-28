-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "subColors" TEXT[] DEFAULT ARRAY[]::TEXT[];
