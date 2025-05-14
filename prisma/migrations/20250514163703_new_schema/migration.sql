/*
  Warnings:

  - You are about to drop the column `image` on the `UserDetails` table. All the data in the column will be lost.
  - You are about to drop the `Interests` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Matches` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PostInterests` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Posts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Reactions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserInterests` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('LIKE', 'COMMENT', 'MATCH', 'MESSAGE', 'EVENT_REMINDER', 'SYSTEM_MESSAGE');

-- CreateEnum
CREATE TYPE "MatchStatus" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED');

-- CreateEnum
CREATE TYPE "CoffeeChatStatus" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED');

-- DropForeignKey
ALTER TABLE "Matches" DROP CONSTRAINT "Matches_matchUserId_fkey";

-- DropForeignKey
ALTER TABLE "Matches" DROP CONSTRAINT "Matches_userId_fkey";

-- DropForeignKey
ALTER TABLE "PostInterests" DROP CONSTRAINT "PostInterests_interestId_fkey";

-- DropForeignKey
ALTER TABLE "PostInterests" DROP CONSTRAINT "PostInterests_postId_fkey";

-- DropForeignKey
ALTER TABLE "Posts" DROP CONSTRAINT "Posts_userId_fkey";

-- DropForeignKey
ALTER TABLE "Reactions" DROP CONSTRAINT "Reactions_postId_fkey";

-- DropForeignKey
ALTER TABLE "Reactions" DROP CONSTRAINT "Reactions_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserInterests" DROP CONSTRAINT "UserInterests_interestId_fkey";

-- DropForeignKey
ALTER TABLE "UserInterests" DROP CONSTRAINT "UserInterests_userDetailsId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "username" SET DEFAULT concat('user_', substr(md5(random()::text), 1, 8));

-- AlterTable
ALTER TABLE "UserDetails" DROP COLUMN "image",
ADD COLUMN     "profilePicture" TEXT,
ALTER COLUMN "bio" DROP NOT NULL,
ALTER COLUMN "availability" DROP NOT NULL,
ALTER COLUMN "department" DROP NOT NULL,
ALTER COLUMN "reading" DROP NOT NULL,
ALTER COLUMN "year" DROP NOT NULL;

-- DropTable
DROP TABLE "Interests";

-- DropTable
DROP TABLE "Matches";

-- DropTable
DROP TABLE "PostInterests";

-- DropTable
DROP TABLE "Posts";

-- DropTable
DROP TABLE "Reactions";

-- DropTable
DROP TABLE "UserInterests";

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "commentCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reaction" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "commentContent" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostTag" (
    "id" TEXT NOT NULL,
    "tagName" TEXT NOT NULL,

    CONSTRAINT "PostTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "userDetailsId" TEXT NOT NULL,
    "notificationType" "NotificationType" NOT NULL,
    "notificationData" TEXT NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Interest" (
    "id" TEXT NOT NULL,
    "interestName" TEXT NOT NULL,

    CONSTRAINT "Interest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Match" (
    "id" TEXT NOT NULL,
    "inviterId" TEXT NOT NULL,
    "inviteeId" TEXT NOT NULL,
    "matchScore" INTEGER NOT NULL,
    "matchStatus" "MatchStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Match_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserSimilarity" (
    "id" TEXT NOT NULL,
    "currentUserId" TEXT NOT NULL,
    "otherUserId" TEXT NOT NULL,
    "similarityScore" INTEGER NOT NULL,
    "factors" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserSimilarity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TIMESTAMP(3),
    "category" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CoffeeChat" (
    "id" TEXT NOT NULL,
    "inviterId" TEXT NOT NULL,
    "inviteeId" TEXT NOT NULL,
    "scheduledAt" TIMESTAMP(3),
    "status" "CoffeeChatStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CoffeeChat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chat" (
    "id" TEXT NOT NULL,
    "user1Id" TEXT NOT NULL,
    "user2Id" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL,
    "chatId" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PostToPostTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_PostToPostTag_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_InterestToUserDetails" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_InterestToUserDetails_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_EventOrganizers" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_EventOrganizers_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_EventAttendees" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_EventAttendees_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Reaction_postId_key" ON "Reaction"("postId");

-- CreateIndex
CREATE UNIQUE INDEX "PostTag_tagName_key" ON "PostTag"("tagName");

-- CreateIndex
CREATE UNIQUE INDEX "Interest_interestName_key" ON "Interest"("interestName");

-- CreateIndex
CREATE UNIQUE INDEX "Match_inviterId_inviteeId_key" ON "Match"("inviterId", "inviteeId");

-- CreateIndex
CREATE UNIQUE INDEX "UserSimilarity_currentUserId_otherUserId_key" ON "UserSimilarity"("currentUserId", "otherUserId");

-- CreateIndex
CREATE UNIQUE INDEX "Event_title_description_location_date_time_key" ON "Event"("title", "description", "location", "date", "time");

-- CreateIndex
CREATE UNIQUE INDEX "Chat_user1Id_user2Id_key" ON "Chat"("user1Id", "user2Id");

-- CreateIndex
CREATE INDEX "_PostToPostTag_B_index" ON "_PostToPostTag"("B");

-- CreateIndex
CREATE INDEX "_InterestToUserDetails_B_index" ON "_InterestToUserDetails"("B");

-- CreateIndex
CREATE INDEX "_EventOrganizers_B_index" ON "_EventOrganizers"("B");

-- CreateIndex
CREATE INDEX "_EventAttendees_B_index" ON "_EventAttendees"("B");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "UserDetails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reaction" ADD CONSTRAINT "Reaction_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "UserDetails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userDetailsId_fkey" FOREIGN KEY ("userDetailsId") REFERENCES "UserDetails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_inviterId_fkey" FOREIGN KEY ("inviterId") REFERENCES "UserDetails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_inviteeId_fkey" FOREIGN KEY ("inviteeId") REFERENCES "UserDetails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSimilarity" ADD CONSTRAINT "UserSimilarity_currentUserId_fkey" FOREIGN KEY ("currentUserId") REFERENCES "UserDetails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSimilarity" ADD CONSTRAINT "UserSimilarity_otherUserId_fkey" FOREIGN KEY ("otherUserId") REFERENCES "UserDetails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoffeeChat" ADD CONSTRAINT "CoffeeChat_inviterId_fkey" FOREIGN KEY ("inviterId") REFERENCES "UserDetails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoffeeChat" ADD CONSTRAINT "CoffeeChat_inviteeId_fkey" FOREIGN KEY ("inviteeId") REFERENCES "UserDetails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_user1Id_fkey" FOREIGN KEY ("user1Id") REFERENCES "UserDetails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_user2Id_fkey" FOREIGN KEY ("user2Id") REFERENCES "UserDetails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "Chat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "UserDetails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostToPostTag" ADD CONSTRAINT "_PostToPostTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostToPostTag" ADD CONSTRAINT "_PostToPostTag_B_fkey" FOREIGN KEY ("B") REFERENCES "PostTag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_InterestToUserDetails" ADD CONSTRAINT "_InterestToUserDetails_A_fkey" FOREIGN KEY ("A") REFERENCES "Interest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_InterestToUserDetails" ADD CONSTRAINT "_InterestToUserDetails_B_fkey" FOREIGN KEY ("B") REFERENCES "UserDetails"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventOrganizers" ADD CONSTRAINT "_EventOrganizers_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventOrganizers" ADD CONSTRAINT "_EventOrganizers_B_fkey" FOREIGN KEY ("B") REFERENCES "UserDetails"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventAttendees" ADD CONSTRAINT "_EventAttendees_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventAttendees" ADD CONSTRAINT "_EventAttendees_B_fkey" FOREIGN KEY ("B") REFERENCES "UserDetails"("id") ON DELETE CASCADE ON UPDATE CASCADE;
