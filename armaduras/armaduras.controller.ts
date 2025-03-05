import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ArmadurasService } from './armaduras.service';
import { ArmaduraDto } from './armaduras.dto';

@Controller('armaduras')
export class ArmadurasController {

    constructor(
        private readonly armadurasService : ArmadurasService
    ){}

    @Post()
    async crear(@Body() armadura:ArmaduraDto){
        const resultado = await this.armadurasService.crearArmadura(armadura)
        return {creado:true, resultado}
    }

    @Get()
    async buscarTodo() {
        return await this.armadurasService.buscarTodo();
    }

    @Get(':id')
    async buscarId(@Param('id') id: string) {
        return await this.armadurasService.buscarId(id);
    }

    @Patch(':id')
    async actualizar(@Param('id') id: string, @Body() armadura: ArmaduraDto) {
        return await this.armadurasService.actualizar(id, armadura);
    }

    @Delete(':id')
    async eliminar(@Param('id') id: string) {
        return await this.armadurasService.eliminar(id);
    }
}