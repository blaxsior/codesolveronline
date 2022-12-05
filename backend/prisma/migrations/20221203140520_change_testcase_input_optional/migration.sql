-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TestCase" (
    "pid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "input" TEXT,
    "output" TEXT NOT NULL,
    "type" BOOLEAN NOT NULL,
    CONSTRAINT "TestCase_pid_fkey" FOREIGN KEY ("pid") REFERENCES "Problem" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_TestCase" ("input", "output", "pid", "type") SELECT "input", "output", "pid", "type" FROM "TestCase";
DROP TABLE "TestCase";
ALTER TABLE "new_TestCase" RENAME TO "TestCase";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
