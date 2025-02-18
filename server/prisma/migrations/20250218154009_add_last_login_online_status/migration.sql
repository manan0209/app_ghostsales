-- AlterTable
ALTER TABLE "User" ADD COLUMN     "lastLogin" TIMESTAMP(3),
ADD COLUMN     "onlineStatus" BOOLEAN NOT NULL DEFAULT false;
