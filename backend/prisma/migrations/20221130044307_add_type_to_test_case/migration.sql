/*
  Warnings:

  - Added the required column `type` to the `TestCase` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TestCase" (
    "pid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "input" TEXT NOT NULL,
    "output" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    CONSTRAINT "TestCase_pid_fkey" FOREIGN KEY ("pid") REFERENCES "Problem" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_TestCase" ("input", "output", "pid") SELECT "input", "output", "pid" FROM "TestCase";
DROP TABLE "TestCase";
ALTER TABLE "new_TestCase" RENAME TO "TestCase";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
