/*
  Warnings:

  - You are about to alter the column `type` on the `TestCase` table. The data in that column could be lost. The data in that column will be cast from `String` to `Boolean`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TestCase" (
    "pid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "input" TEXT NOT NULL,
    "output" TEXT NOT NULL,
    "type" BOOLEAN NOT NULL,
    CONSTRAINT "TestCase_pid_fkey" FOREIGN KEY ("pid") REFERENCES "Problem" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_TestCase" ("input", "output", "pid", "type") SELECT "input", "output", "pid", "type" FROM "TestCase";
DROP TABLE "TestCase";
ALTER TABLE "new_TestCase" RENAME TO "TestCase";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
