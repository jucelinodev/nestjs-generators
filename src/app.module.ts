import { Module } from '@nestjs/common';
import { HealthModule } from './shared/health/health.module';
import { ConfigModule } from '@nestjs/config';
import { configuration } from './shared/config';

@Module({
  imports: [
    HealthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
