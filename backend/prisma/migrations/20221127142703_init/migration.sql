-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT
);

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
    CONSTRAINT "TestCase_pid_fkey" FOREIGN KEY ("pid") REFERENCES "Problem" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
