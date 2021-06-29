import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { EjemploModeloExtra } from './ejemplo-modelo-extra';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .addSecurity('basic', {
      type: 'http',
      scheme: 'basic',
    })
    .setTitle('Api de ejemplo')
    .setExternalDoc('Página de documentación', 'http://cursosdedesarrollo')
    .setDescription('Descripción del api')
    //.addServer('main', 'http://localhost/')
    .setVersion('1.0')
    .addTag('default')
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    extraModels: [EjemploModeloExtra],
  });
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
