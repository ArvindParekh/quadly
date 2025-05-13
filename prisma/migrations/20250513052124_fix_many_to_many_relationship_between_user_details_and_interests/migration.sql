/*
  Warnings:

  - You are about to drop the column `createdAt` on the `UserInterests` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `UserInterests` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "username" SET DEFAULT concat('user_', substr(md5(random()::text), 1, 8));

-- AlterTable
ALTER TABLE "UserInterests" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";
