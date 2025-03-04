import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { BatallasService } from './batallas.service';
import { SimularBatallaDto } from './batalla.dto';

@Controller('batallas')
export class BatallasController {
    constructor(
        private readonly batallasService: BatallasService) {} //Private es de solo lectura
        //con este objeto me triago el metodo crear

        @Post() //crear una batalla
        async crear(@Body() batalla: SimularBatallaDto){
            const resultado= await this.batallasService.crearBatalla
            return {ok:true, resultado}
        } //metodo asincronico

    /*
// Simular una batalla
    @Post('simular')
    async simularBatalla(@Body() simularBatallaDto: SimularBatallaDto) {
        const { personaje1Id, personaje2Id } = simularBatallaDto;
        return this.batallasService.simularBatalla(personaje1Id, personaje2Id);
    }

    */
// Obtener todas las batallas
    @Get('all')
    async Consultar() {
        const resultado = await this.batallasService.CosultarBatallas()
        return resultado
        //return this.batallasService.obtenerBatallas();
    }

// Obtener una batalla por ID
    @Get(':id')
    async ConsultaBatallaId(@Param('id') id: string) {
        const resultado = await this.batallasService.ConsultarBatallasId(id) //() defino el aprametrod e bsuqueda
        return resultado
        //return this.batallasService.obtenerBatallaPorId(id);
    }
    }