import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { AtributosService } from './atributos.service';
import { AtributosDto } from './atributos.dto';

@Controller('atributos')
export class AtributosController {
constructor (private readonly Inicio_de_Atributos : AtributosService){}

 
    @Get()
    metodo_Entra_en_este_nuevo_mundo(){
        return this.Inicio_de_Atributos.Entra_en_este_nuevo_mundo()
}

    @Post()
    async Crear(@Body() atributos: AtributosDto){
        const respuesta= await this.Inicio_de_Atributos.CrearAtributo(atributos)
        return {ok: true, respuesta}   
    }

    @Get('/all')
    async Buscar(){
        const respuesta= await this.Inicio_de_Atributos.ConsultarTodos()
        return respuesta
    }    

    @Get('/:id') 
    async find(@Param("id") id: string){
        const respuesta= await this.Inicio_de_Atributos.BuscarxId(id)
        if (respuesta){
        return respuesta
        }else
        return "El Atributos no existe"
    }

    @Patch("/:id")
    async Actualizar(@Param("id") id:string, @Body() atributoActualizado: AtributosDto){
        const respuesta =await this.Inicio_de_Atributos.Actualizar(id, atributoActualizado)
        return respuesta
    }
 
    @Patch(':id/mejorar-atributos')
    async Mejoraratributos(@Param('id') id: string, @Body() AtributoActualizados: AtributosDto) {
        return this.Inicio_de_Atributos.Mejoraratributos(id, AtributoActualizados);
    }
    
}