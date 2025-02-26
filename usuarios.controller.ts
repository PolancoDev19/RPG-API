import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosDto } from './usuarios-dto/usuarios.dto';
@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly usuariosService: UsuariosService){}

@Get()
    pruebaUsuarios(){
        this.usuariosService.pruebaUsuarios();
    }

@Post()
    async Crear(@Body()usuarios:UsuariosDto){
        const respuesta= await this.usuariosService.CrearUsuario(usuarios)
        return{ok: true,respuesta}
    }
@Get('/all')
    async Buscar(){
        const respuesta=await this.usuariosService.ConsultarTodos()
        return respuesta 
    }
}
