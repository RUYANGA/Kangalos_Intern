/*
  Warnings:

  - Added the required column `desciption` to the `Department` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Program` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `ProjectTeam` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `ProjectTeam` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Department" ADD COLUMN     "desciption" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Program" ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ProjectTeam" ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;
