import { registerAs } from '@nestjs/config'
interface IDataBase {
    url:string;
}

export const DataBaseConfig = registerAs('database', ():IDataBase => ({
    url: process.env.DATABASE_URL ? String(process.env.DATABASE_URL): undefined
}))