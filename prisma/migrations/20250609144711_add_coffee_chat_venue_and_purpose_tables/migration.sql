/*
  Warnings:

  - Added the required column `duration` to the `CoffeeChat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `purposeId` to the `CoffeeChat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `venueId` to the `CoffeeChat` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CoffeeChatVenueNoiseLevel" AS ENUM ('QUIET', 'MODERATE', 'LIVELY');

-- CreateEnum
CREATE TYPE "CoffeeChatVenueTags" AS ENUM ('OUTDOOR', 'SCENIC', 'FRESH_AIR', 'WIFI', 'OUTLETS', 'WHITEBOARDS', 'PRIVATE', 'FOOD', 'COMFORTABLE_SEATING', 'BOOKS');

-- AlterTable
ALTER TABLE "CoffeeChat" ADD COLUMN     "duration" INTEGER NOT NULL,
ADD COLUMN     "personalMessage" TEXT,
ADD COLUMN     "purposeId" TEXT NOT NULL,
ADD COLUMN     "venueId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "username" SET DEFAULT concat('user_', substr(md5(random()::text), 1, 8));

-- CreateTable
CREATE TABLE "CoffeeChatPurpose" (
    "id" TEXT NOT NULL,
    "purposeName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "timeLimit" INTEGER NOT NULL,

    CONSTRAINT "CoffeeChatPurpose_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CoffeeChatVenue" (
    "id" TEXT NOT NULL,
    "venueName" TEXT NOT NULL,
    "noiseLevel" "CoffeeChatVenueNoiseLevel" NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "tags" "CoffeeChatVenueTags"[],

    CONSTRAINT "CoffeeChatVenue_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CoffeeChatPurpose_purposeName_key" ON "CoffeeChatPurpose"("purposeName");

-- CreateIndex
CREATE UNIQUE INDEX "CoffeeChatVenue_venueName_key" ON "CoffeeChatVenue"("venueName");

-- AddForeignKey
ALTER TABLE "CoffeeChat" ADD CONSTRAINT "CoffeeChat_purposeId_fkey" FOREIGN KEY ("purposeId") REFERENCES "CoffeeChatPurpose"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoffeeChat" ADD CONSTRAINT "CoffeeChat_venueId_fkey" FOREIGN KEY ("venueId") REFERENCES "CoffeeChatVenue"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
