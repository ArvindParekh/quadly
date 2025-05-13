/*
  Warnings:

  - You are about to drop the column `title` on the `Posts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Posts" DROP COLUMN "title";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "username" SET DEFAULT concat('user_', substr(md5(random()::text), 1, 8));

-- CreateTable
CREATE TABLE "PostInterests" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "interestId" TEXT NOT NULL,

    CONSTRAINT "PostInterests_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PostInterests" ADD CONSTRAINT "PostInterests_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostInterests" ADD CONSTRAINT "PostInterests_interestId_fkey" FOREIGN KEY ("interestId") REFERENCES "Interests"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
