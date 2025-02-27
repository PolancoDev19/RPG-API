import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PocionesService } from './pociones.service';
import { PocionDto } from './pociones.dto';

@Controller('pociones')
export class PocionesController {
    
    constructor (
        private readonly pocionesService : PocionesService
    ){}

    @Post()
    async crear(@Body() pocion : PocionDto){
        const resultado = await this.pocionesService.crearPocion(pocion)
        return {creado:true, resultado}
    }

    @Get()
    async buscarTodo() {
        return await this.pocionesService.buscarTodo();
    }

    @Get(':id')
    async buscarId(@Param('id') id: string) {
        return await this.pocionesService.buscarId(id);
    }

    @Patch(':id')
    async actualizar(@Param('id') id: string, @Body() pocion: PocionDto) {
        return await this.pocionesService.actualizar(id, pocion);
    }

    @Delete(':id')
    async eliminar(@Param('id') id: string) {
        return await this.pocionesService.eliminar(id);
    }
}