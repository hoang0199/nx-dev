import { ConfigType, registerAs } from '@nestjs/config';
import { Inject } from '@nestjs/common';

export const authConfig = registerAs('auth', () => ({
  jwtSecret: process.env.JWT_SECRET || 'superSecret',
  jwtExpire: process.env.JWT_EXPIRE || '7d',
  jwtSalt: +process.env.JWT_SALT || 12,
}));

export type AuthConfig = ConfigType<typeof authConfig>;
export const InjectAuthConfig = () => Inject(authConfig.KEY);
