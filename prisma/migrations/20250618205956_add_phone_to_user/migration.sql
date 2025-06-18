/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `University` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "University" ALTER COLUMN "name" DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX "University_name_key" ON "University"("name");
