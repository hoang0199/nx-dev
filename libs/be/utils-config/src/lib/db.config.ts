import { ConfigType, registerAs } from '@nestjs/config';
import { Inject } from '@nestjs/common';

export const dbConfig = registerAs('db', () => ({
  url: 'mongodb://localhost:27017/',
  dbName: 'nx-dev',
}));

export type DbConfig = ConfigType<typeof dbConfig>;
export const InjectDbConfig = () => Inject(dbConfig.KEY);
