/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "InitCode" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "code" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "PInitCodes" (
    "pid" INTEGER NOT NULL,
    "cid" INTEGER NOT NULL,

    PRIMARY KEY ("pid", "cid"),
    CONSTRAINT "PInitCodes_pid_fkey" FOREIGN KEY ("pid") REFERENCES "Problem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PInitCodes_cid_fkey" FOREIGN KEY ("cid") REFERENCES "InitCode" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_InitCodeToProblem" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_InitCodeToProblem_A_fkey" FOREIGN KEY ("A") REFERENCES "InitCode" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_InitCodeToProblem_B_fkey" FOREIGN KEY ("B") REFERENCES "Problem" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_InitCodeToProblem_AB_unique" ON "_InitCodeToProblem"("A", "B");

-- CreateIndex
CREATE INDEX "_InitCodeToProblem_B_index" ON "_InitCodeToProblem"("B");
