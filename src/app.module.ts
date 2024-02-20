import { Module } from '@nestjs/common';
import { BookModule } from './books/book.module';
import { HealthModule } from './shared/health/health.module';

@Module({
  imports: [HealthModule, BookModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
