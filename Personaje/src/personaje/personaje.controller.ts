import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PersonajeService } from './personaje.service';
import { PersonajeDto } from './personaje.dto';

@Controller('personaje')
export class PersonajeController {

constructor (private readonly Inicio_de_Personaje : PersonajeService){}

 
    @Get()
    metodo_Entra_en_este_nuevo_mundo(){
        return this.Inicio_de_Personaje.Entra_en_este_nuevo_mundo()
}

    @Post()
    async Crear(@Body() personaje: PersonajeDto){
        const respuesta= await this.Inicio_de_Personaje.CrearPersonaje(personaje)
        return {ok: true, respuesta}   
    }

    @Get('/all')
    async Buscar(){
        const respuesta= await this.Inicio_de_Personaje.ConsultarTodos()
        return respuesta
    }    

    @Get('/:id') 
    async find(@Param("id") id: string){
        const respuesta= await this.Inicio_de_Personaje.BuscarxId(id)
        if (respuesta){
        return respuesta
        }else
        return "El Personaje no existe"
    }

    @Patch("/:id")
    async Actualizar(@Param("id") id:string, @Body() personajeActualizado: PersonajeDto){
        const respuesta =await this.Inicio_de_Personaje.Actualizar(id, personajeActualizado)
        return respuesta
    }


    @Patch(':id/subir-nivel')
    async Subirnivel(@Param('id') id: string, @Body() NivelActualizado: PersonajeDto) {
        const respuesta =await this.Inicio_de_Personaje.Subirnivel(id, NivelActualizado);
    }

    @Patch(':id/mejorar-atributos')
    async Mejoraratributos(@Param('id') id: string, @Body() AtributoActualizados: PersonajeDto) {
        return this.Inicio_de_Personaje.Mejoraratributos(id, AtributoActualizados);
    }
    
}