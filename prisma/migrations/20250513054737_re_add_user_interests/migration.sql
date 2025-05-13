/*
  Warnings:

  - You are about to drop the column `userDetailsId` on the `Interests` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Interests` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Interests" DROP CONSTRAINT "Interests_userDetailsId_fkey";

-- AlterTable
ALTER TABLE "Interests" DROP COLUMN "userDetailsId";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "username" SET DEFAULT concat('user_', substr(md5(random()::text), 1, 8));

-- CreateTable
CREATE TABLE "UserInterests" (
    "id" TEXT NOT NULL,
    "userDetailsId" TEXT NOT NULL,
    "interestId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserInterests_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "UserInterests_userDetailsId_idx" ON "UserInterests"("userDetailsId");

-- CreateIndex
CREATE INDEX "UserInterests_interestId_idx" ON "UserInterests"("interestId");

-- CreateIndex
CREATE UNIQUE INDEX "UserInterests_userDetailsId_interestId_key" ON "UserInterests"("userDetailsId", "interestId");

-- CreateIndex
CREATE UNIQUE INDEX "Interests_name_key" ON "Interests"("name");

-- AddForeignKey
ALTER TABLE "UserInterests" ADD CONSTRAINT "UserInterests_userDetailsId_fkey" FOREIGN KEY ("userDetailsId") REFERENCES "UserDetails"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserInterests" ADD CONSTRAINT "UserInterests_interestId_fkey" FOREIGN KEY ("interestId") REFERENCES "Interests"("id") ON DELETE CASCADE ON UPDATE CASCADE;
