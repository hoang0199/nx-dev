import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as compression from 'compression';
import helmet from 'helmet';
import { AppModule } from './app/app.module';
import { appConfig, AppConfig } from '@nx-demo/be/utils-config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get<AppConfig>(appConfig.KEY);

  app.enableCors();
  app.enableShutdownHooks();

  app.use(compression());
  app.use(helmet());
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  await app.listen(config.port, () => {
    Logger.log(
      `🚀 Application is running on: http://localhost:${config.port}/${globalPrefix}`
    );
  });
}

bootstrap();
