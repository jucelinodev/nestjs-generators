import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';
import * as compression from 'compression';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import mongoose from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.use(compression());
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('/api');
  app.enableCors();

  const configSwagger = new DocumentBuilder()
    .setTitle('API example')
    .setDescription('The rest API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('swagger', app, document);

  const configService = app.get(ConfigService);

  const mongoUri = configService.get<string>('mongoUri');

  const logger = new Logger('Database');
  mongoose
    .connect(mongoUri)
    .then(() => logger.log('Mongo conectado com sucesso'))
    .catch((e) => logger.error(e));

  const port = configService.get<number>('port');
  await app.listen(port);
}

bootstrap();
