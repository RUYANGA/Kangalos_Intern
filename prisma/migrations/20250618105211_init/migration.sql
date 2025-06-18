/*
  Warnings:

  - Added the required column `description` to the `School` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `School` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "School" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL;
