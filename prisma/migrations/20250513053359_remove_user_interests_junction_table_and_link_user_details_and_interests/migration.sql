/*
  Warnings:

  - You are about to drop the `UserInterests` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserInterests" DROP CONSTRAINT "UserInterests_interestId_fkey";

-- DropForeignKey
ALTER TABLE "UserInterests" DROP CONSTRAINT "UserInterests_userDetailsId_fkey";

-- AlterTable
ALTER TABLE "Interests" ADD COLUMN     "userDetailsId" TEXT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "username" SET DEFAULT concat('user_', substr(md5(random()::text), 1, 8));

-- DropTable
DROP TABLE "UserInterests";

-- AddForeignKey
ALTER TABLE "Interests" ADD CONSTRAINT "Interests_userDetailsId_fkey" FOREIGN KEY ("userDetailsId") REFERENCES "UserDetails"("id") ON DELETE SET NULL ON UPDATE CASCADE;
