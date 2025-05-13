/*
  Warnings:

  - Added the required column `availability` to the `UserDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `department` to the `UserDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reading` to the `UserDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `UserDetails` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "username" SET DEFAULT concat('user_', substr(md5(random()::text), 1, 8));

-- AlterTable
ALTER TABLE "UserDetails" ADD COLUMN     "availability" TEXT NOT NULL,
ADD COLUMN     "department" TEXT NOT NULL,
ADD COLUMN     "reading" TEXT NOT NULL,
ADD COLUMN     "year" TEXT NOT NULL;
