-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "image" DROP NOT NULL;

-- AlterTable
ALTER TABLE "_CategoryToProduct" ADD CONSTRAINT "_CategoryToProduct_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_CategoryToProduct_AB_unique";
