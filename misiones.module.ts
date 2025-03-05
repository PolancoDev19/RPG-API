// src/misiones/misiones.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MisionesService } from './misiones.service';
import { MisionesController } from './misiones.controller';
import { Mision, MisionSchema } from './schemas/mision.schema';
import { Personaje, PersonajeSchema } from 'src/personajes/schemas/personaje.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Mision', schema: MisionSchema }]),
    
    
  ],
  controllers: [MisionesController],
  providers: [MisionesService],
})
export class MisionModule {}