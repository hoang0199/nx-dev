import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { appConfig, authConfig, databaseConfig } from '@nx-demo/be/utils-config';

@Module({
  providers: [...databaseConfig],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, authConfig],
    }),
  ],
  exports: [...databaseConfig],
})
export class BeFeatureConfigModule {}
