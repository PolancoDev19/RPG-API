import { Controller, Post, Body, Param, UsePipes, ValidationPipe, Get, Put, Delete } from '@nestjs/common';
import { MisionesService } from './misiones.service';
import { CreateMisionDto } from './dto/Create-mision.dto';
import { UpdateMisionDto } from './dto/update-mision.dto';

@Controller('misiones')
export class MisionesController {
  constructor(private readonly misionesService: MisionesService) {}

  @Post()
  @UsePipes(new ValidationPipe ({transform:true}))
  async create(@Body() createMisionDto: CreateMisionDto) {
    return this.misionesService.create(createMisionDto);
  }

  @Get()
  async findAll(){
    return this.misionesService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.misionesService.findById(id);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({transform: true}))
  async update(@Param('id') id: string, @Body() updateMisionDto: UpdateMisionDto) {
    return this.misionesService.update(id, updateMisionDto);
  }

  @Delete(':id')
  async delete(@Param('id') id:string){
    return this.misionesService.delete(id);
  }
    
  @Post(':id/complete')
  async completarMision(@Param('id') misionId: string, @Body('personajeId') personajeId: string,
  ) {
    return this.misionesService.completarMision(misionId, personajeId);
  }
}