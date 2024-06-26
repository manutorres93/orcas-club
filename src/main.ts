import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    }
  ))

  const config = new DocumentBuilder()
  .setTitle('Orcas API documentation')
  .setDescription('API for club orcas')
  .setVersion('1.0')
  .addTag('athletes')
  .addBearerAuth()
  .build();
const document = SwaggerModule.createDocument(app, config);
/* delete document.paths['modules/modules/user/entities']; */
SwaggerModule.setup('api-documentation', app, document);

  
  await app.listen(3000);
}
bootstrap();
