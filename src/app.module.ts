import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParamsController } from './params.controller';
import { RutasController } from './rutas.controller';
import { PayloadController } from './payload.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    ParamsController,
    RutasController,
    PayloadController,
  ],
  providers: [AppService],
})
export class AppModule {}
