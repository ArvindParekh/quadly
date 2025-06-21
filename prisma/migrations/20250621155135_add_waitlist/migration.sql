-- AlterTable
ALTER TABLE "User" ALTER COLUMN "username" SET DEFAULT concat('user_', substr(md5(random()::text), 1, 8));

-- CreateTable
CREATE TABLE "Waitlist" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "interests" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Waitlist_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Waitlist_email_key" ON "Waitlist"("email");
