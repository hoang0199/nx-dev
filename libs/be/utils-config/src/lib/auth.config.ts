import { ConfigType, registerAs } from '@nestjs/config';

export const authConfig = registerAs('auth', () => ({
  jwtSecret: process.env.JWT_SECRET || 'superSecret',
  jwtExpire: process.env.JWT_EXPIRE || '7d',
  jwtSalt: +process.env.JWT_SALT || 12,
}));

export type AuthConfig = ConfigType<typeof authConfig>;
