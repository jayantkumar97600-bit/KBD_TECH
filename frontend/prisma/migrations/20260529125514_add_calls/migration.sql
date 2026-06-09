/*
  Warnings:

  - The values [SCHEDULED,COMPLETED,CANCELED] on the enum `CallStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `durationMinutes` on the `Call` table. All the data in the column will be lost.
  - You are about to drop the column `scheduledAt` on the `Call` table. All the data in the column will be lost.
  - Added the required column `direction` to the `Call` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CallDirection" AS ENUM ('INBOUND', 'OUTBOUND');

-- AlterEnum
BEGIN;
CREATE TYPE "CallStatus_new" AS ENUM ('MISSED', 'ANSWERED', 'VOICEMAIL', 'IN_PROGRESS');
ALTER TABLE "Call" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Call" ALTER COLUMN "status" TYPE "CallStatus_new" USING ("status"::text::"CallStatus_new");
ALTER TYPE "CallStatus" RENAME TO "CallStatus_old";
ALTER TYPE "CallStatus_new" RENAME TO "CallStatus";
DROP TYPE "CallStatus_old";
ALTER TABLE "Call" ALTER COLUMN "status" SET DEFAULT 'IN_PROGRESS';
COMMIT;

-- AlterTable
ALTER TABLE "Call" DROP COLUMN "durationMinutes",
DROP COLUMN "scheduledAt",
ADD COLUMN     "customerName" TEXT,
ADD COLUMN     "direction" "CallDirection" NOT NULL,
ADD COLUMN     "duration" INTEGER,
ADD COLUMN     "endedAt" TIMESTAMP(3),
ADD COLUMN     "phoneNumber" TEXT,
ADD COLUMN     "recordingUrl" TEXT,
ADD COLUMN     "startedAt" TIMESTAMP(3),
ADD COLUMN     "transcript" TEXT,
ALTER COLUMN "status" SET DEFAULT 'IN_PROGRESS';
