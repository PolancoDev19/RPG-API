import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { Sub_NivelDto } from './sub_nivel.dto';
import { SubNivelService } from './sub_nivel.service';

@Controller('sub_nivel')
export class SubNivelController {
constructor (private readonly Inicio_de_Subnivel : SubNivelService){}

 
    @Get()
    metodo_Entra_en_este_nuevo_mundo(){
        return this.Inicio_de_Subnivel.Entra_en_este_nuevo_mundo()
}

    @Post()
    async Crear(@Body() Subnivel: Sub_NivelDto){
        const respuesta= await this.Inicio_de_Subnivel.Crearnivel(Subnivel)
        return {ok: true, respuesta}   
    }

    @Get('/all')
    async Buscar(){
        const respuesta= await this.Inicio_de_Subnivel.ConsultarTodos()
        return respuesta
    }    

    @Get('/:id') 
    async find(@Param("id") id: string){
        const respuesta= await this.Inicio_de_Subnivel.BuscarxId(id)
        if (respuesta){
        return respuesta
        }else
        return "No se puede subir de nivel"
    }

    @Patch("/:id")
    async Actualizar(@Param("id") id:string, @Body() personajeActualizado: Sub_NivelDto){
        const respuesta =await this.Inicio_de_Subnivel.Actualizar(id, personajeActualizado)
        return respuesta
    }


    @Patch(':id/subir-nivel')
    async Subirnivel(@Param('id') id: string, @Body() NivelActualizado: Sub_NivelDto) {
        const respuesta =await this.Inicio_de_Subnivel.Subirnivel(id, NivelActualizado);
    }
}