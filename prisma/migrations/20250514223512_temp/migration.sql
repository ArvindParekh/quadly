-- AlterTable
ALTER TABLE "User" ALTER COLUMN "username" SET DEFAULT concat('user_', substr(md5(random()::text), 1, 8));
