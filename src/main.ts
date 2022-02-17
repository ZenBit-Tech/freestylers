import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.modules';

async function bootstrap() {
  const PORT = process.env.PORT || 8080;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Get-job Doc')
    .setDescription('The Get-job API description')
    .setVersion('1.0')
    .addTag('getjob')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}
bootstrap();
