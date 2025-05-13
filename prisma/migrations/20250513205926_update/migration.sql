/*
  Warnings:

  - A unique constraint covering the columns `[postId,interestId]` on the table `PostInterests` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "PostInterests" DROP CONSTRAINT "PostInterests_interestId_fkey";

-- DropForeignKey
ALTER TABLE "PostInterests" DROP CONSTRAINT "PostInterests_postId_fkey";

-- DropForeignKey
ALTER TABLE "Reactions" DROP CONSTRAINT "Reactions_postId_fkey";

-- DropForeignKey
ALTER TABLE "Reactions" DROP CONSTRAINT "Reactions_userId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "username" SET DEFAULT concat('user_', substr(md5(random()::text), 1, 8));

-- CreateIndex
CREATE INDEX "PostInterests_postId_idx" ON "PostInterests"("postId");

-- CreateIndex
CREATE INDEX "PostInterests_interestId_idx" ON "PostInterests"("interestId");

-- CreateIndex
CREATE UNIQUE INDEX "PostInterests_postId_interestId_key" ON "PostInterests"("postId", "interestId");

-- AddForeignKey
ALTER TABLE "PostInterests" ADD CONSTRAINT "PostInterests_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostInterests" ADD CONSTRAINT "PostInterests_interestId_fkey" FOREIGN KEY ("interestId") REFERENCES "Interests"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reactions" ADD CONSTRAINT "Reactions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reactions" ADD CONSTRAINT "Reactions_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
