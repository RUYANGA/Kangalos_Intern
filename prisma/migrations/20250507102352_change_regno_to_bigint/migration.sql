/*
  Warnings:

  - A unique constraint covering the columns `[directorId]` on the table `College` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[hodId]` on the table `Department` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[deanId]` on the table `School` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "reg_no" SET DATA TYPE BIGINT;

-- CreateIndex
CREATE UNIQUE INDEX "College_directorId_key" ON "College"("directorId");

-- CreateIndex
CREATE UNIQUE INDEX "Department_hodId_key" ON "Department"("hodId");

-- CreateIndex
CREATE UNIQUE INDEX "School_deanId_key" ON "School"("deanId");
