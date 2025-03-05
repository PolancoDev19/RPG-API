import { Module } from '@nestjs/common';
import { AtributosController } from './atributos.controller';
import { AtributosService } from './atributos.service';

@Module({
  controllers: [AtributosController],
  providers: [AtributosService]
})
export class AtributosModule {}
