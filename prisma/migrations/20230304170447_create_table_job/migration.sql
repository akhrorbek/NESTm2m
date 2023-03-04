-- CreateTable
CREATE TABLE "jobs" (
    "job_id" SERIAL NOT NULL,
    "job_title" VARCHAR(32) NOT NULL,

    CONSTRAINT "jobs_pkey" PRIMARY KEY ("job_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "jobs_job_title_key" ON "jobs"("job_title");
