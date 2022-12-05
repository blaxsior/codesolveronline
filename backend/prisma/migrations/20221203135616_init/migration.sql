-- CreateTable
CREATE TABLE "Problem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "TestCase" (
    "pid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "input" TEXT NOT NULL,
    "output" TEXT NOT NULL,
    "type" BOOLEAN NOT NULL,
    CONSTRAINT "TestCase_pid_fkey" FOREIGN KEY ("pid") REFERENCES "Problem" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "InitCode" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "code" TEXT NOT NULL
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
