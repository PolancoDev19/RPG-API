import { Module } from '@nestjs/common';
import { PocionesController } from './pociones.controller';
import { PocionesService } from './pociones.service';
import { MongooseModule } from '@nestjs/mongoose';
import { pocionSchema } from './pociones.model';

@Module({
  imports : [MongooseModule.forFeature([{ name: 'Pociones', schema: pocionSchema }])],
  controllers: [PocionesController],
  providers: [PocionesService]
})
export class PocionesModule {}
