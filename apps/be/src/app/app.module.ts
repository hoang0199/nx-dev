import { Module } from '@nestjs/common';
import { BeFeatureConfigModule } from '@nx-demo/be/feature-config';

@Module({
  imports: [BeFeatureConfigModule],
})
export class AppModule {}
