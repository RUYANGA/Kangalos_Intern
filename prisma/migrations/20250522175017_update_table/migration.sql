-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "ROLES" ADD VALUE 'PRINCIPAL';
ALTER TYPE "ROLES" ADD VALUE 'DEAN';

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "status" SET DEFAULT 'ACTIVE',
ALTER COLUMN "roleInTeam" DROP NOT NULL,
ALTER COLUMN "roleInTeam" DROP DEFAULT;
