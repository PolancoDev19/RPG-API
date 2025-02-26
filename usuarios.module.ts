import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import {MongooseModule} from '@nestjs/mongoose'
import { UsuariosSchema } from './usuarios-dto/usuarios.model.dto';
@Module({
  imports:[MongooseModule.forFeature([{name:'Usuarios',schema:UsuariosSchema}])],
  controllers: [UsuariosController],
  providers: [UsuariosService]
})
export class UsuariosModule {}
