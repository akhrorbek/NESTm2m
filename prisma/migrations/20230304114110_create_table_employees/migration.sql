-- CreateTable
CREATE TABLE "employees" (
    "emp_id" SERIAL NOT NULL,
    "emp_name" VARCHAR(45) NOT NULL,

    CONSTRAINT "employees_pkey" PRIMARY KEY ("emp_id")
);
