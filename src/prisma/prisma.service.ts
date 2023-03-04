import { Injectable, OnModuleInit, OnModuleDestroy,INestApplication } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ConfigService } from '@nestjs/config'
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy{
    constructor( config:ConfigService){
        super({
            datasource : {
                db : {
                    url:config.getOrThrow<string>('database.url')
                }
            }
        })
    }

    onModuleInit():Promise<void> {
        return this.$connect()
    }

    onModuleDestroy():Promise<void> {
        return this.$disconnect()
    }

    enableShutdownHooks(app:INestApplication):void {
        return this.$on('beforeExit', app.close)
    }

}
