import { Module } from '@nestjs/common';
import { BookModule } from './books/book.module';
import { HealthModule } from './shared/health/health.module';
import { ConfigModule } from '@nestjs/config';
import { configuration } from './shared/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    HealthModule,
    BookModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
