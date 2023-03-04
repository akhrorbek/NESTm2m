import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { JobModule } from './module/job/job.module';
import { EmployeesModule } from './module/employees/employees.module';
import { ConfigModule } from '@nestjs/config'
import { config } from './config';
@Module({
  imports: [ConfigModule.forRoot(config), PrismaModule, JobModule, EmployeesModule]
})
export class AppModule {}
