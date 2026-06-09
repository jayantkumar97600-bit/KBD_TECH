-- AlterTable
ALTER TABLE "Lead" ALTER COLUMN "organizationId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Membership" ALTER COLUMN "organizationId" DROP NOT NULL;
