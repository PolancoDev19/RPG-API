import { Module } from '@nestjs/common';
import { PersonajeController } from './personaje.controller';
import { PersonajeService } from './personaje.service';
import { PersonajeSchema } from './personaje.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name:'Personaje',schema:PersonajeSchema}])   ], 
  controllers: [PersonajeController],
  providers: [PersonajeService]
})
export class PersonajeModule {}
