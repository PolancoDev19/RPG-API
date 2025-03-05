import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import { IUsuarios } from './usuarios-dto/usuarios.model.dto';
import {Model} from 'mongoose';
import { UsuariosDto } from './usuarios-dto/usuarios.dto';

@Injectable()
export class UsuariosService {

    constructor (@InjectModel('Usuarios')private usuariosMensajero: Model<IUsuarios>){}

    pruebaUsuarios() {
       return "ESTE ES EL APARTADO USUARIOS"
    }


async CrearUsuario(Usuarios:UsuariosDto): Promise<IUsuarios>{
    const UsuarioCreado = new this.usuariosMensajero(Usuarios)
    return UsuarioCreado.save()

}

async ConsultarTodos(){
    const respuesta=await this.usuariosMensajero.find().exec()
    return respuesta
}





}

