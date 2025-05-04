/*
  Warnings:

  - You are about to drop the column `dean` on the `College` table. All the data in the column will be lost.
  - Added the required column `deanId` to the `College` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "College" DROP COLUMN "dean",
ADD COLUMN     "deanId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "College" ADD CONSTRAINT "College_deanId_fkey" FOREIGN KEY ("deanId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
