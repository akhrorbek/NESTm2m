import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { JobModule } from './module/job/job.module';
import { EmployeesModule } from './module/employees/employees.module';

@Module({
  imports: [PrismaModule, JobModule, EmployeesModule]
})
export class AppModule {}
