-- CreateTable
CREATE TABLE "task" (
    "id" SERIAL NOT NULL,
    "task" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "task_pkey" PRIMARY KEY ("id")
);
