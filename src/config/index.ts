import { ConfigModuleOptions } from '@nestjs/config'
import { AppConfig } from './app'
import { DataBaseConfig } from './database'
export const config:ConfigModuleOptions = {
    load: [AppConfig, DataBaseConfig],
    cache:true,
    isGlobal:true
}