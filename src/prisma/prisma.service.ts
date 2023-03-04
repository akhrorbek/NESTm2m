import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import {ConfigService} from '@nestjs/config'
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {

    constructor(config: ConfigService){
        super({
            datasources: {
                db: {
                    url:config.getOrThrow<string>('database.url')
                }
            }
        })
    }

    onModuleInit() {
        return this.$connect()
    }
    onModuleDestroy() {
        return this.$disconnect()
    }
}
