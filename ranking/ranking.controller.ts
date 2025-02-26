import { Controller, Post, Body, Param, UsePipes, ValidationPipe, Get, Put, Delete} from '@nestjs/common';
import { RankingService } from './ranking.service';
import {CreateRanking} from './dto/ranking.dto';
import {UpdateRanking} from './dto/update.dto';


@Controller('ranking')
export class RankingController {
  constructor(private readonly rankingService: RankingService) {}

  @Post()
  @UsePipes(new ValidationPipe ({transform:true}))
  async create(@Body()createRanking:CreateRanking){
    return this.rankingService.create(createRanking);
  }

  @Get()
  async findAll(){
    return this.rankingService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.rankingService.findOne(id);
  }
 

  @Delete(':id')
  async delete(@Param('id') id:string){
    return this.rankingService.delete(id);
  }}