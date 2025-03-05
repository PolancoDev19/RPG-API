import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ArmasService } from './armas.service';
import { ArmaDto } from './armas.dto';

@Controller('armas')
export class ArmasController {
    constructor(private readonly armasService: ArmasService) {}

    @Post()
    async crear(@Body() arma: ArmaDto) {
        const resultado = await this.armasService.crearArma(arma);
        return { creado: true, resultado };
    }

    @Get()
    async buscarTodo() {
        return await this.armasService.buscarTodo();
    }

    @Get(':id')
    async buscarId(@Param('id') id: string) {
        return await this.armasService.buscarId(id);
    }

    @Patch(':id')
    async actualizar(@Param('id') id: string, @Body() arma: ArmaDto) {
        return await this.armasService.actualizar(id, arma);
    }

    @Delete(':id')
    async eliminar(@Param('id') id: string) {
        return await this.armasService.eliminar(id);
    }
}