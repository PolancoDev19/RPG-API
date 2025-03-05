import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ranking } from './ranking.schema';
import { CreateRanking } from './dto/ranking.dto';
import { UpdateRanking } from './dto/update.dto';

@Injectable()
export class RankingService {
  async findByID(id: string):Promise<Ranking |null> {
    /*throw new Error('Method not implemented.');*/
    return await this.rankingModel.findById(id);
  }
  constructor(
    @InjectModel('Ranking') private readonly rankingModel: Model<Ranking & Document>,
  ) {}

 /* async create(ranking: Ranking): Promise<Ranking> {
    return this.rankingModel.create(ranking);
  }*/
    async create(rankingData: CreateRanking): Promise<Ranking> {
      console.log('Datos recibidos en create:', rankingData);
      const ranking = new this.rankingModel(rankingData);
      return await ranking.save();
    }

  async findAll(): Promise<Ranking[]> {
    return this.rankingModel.find().exec();
  }

  async findOne(id: string): Promise<Ranking | null> {
    return await this.rankingModel.findById(id);
  
  }
  
  async update(id: string, rankingData: UpdateRanking): Promise<Ranking> {
    const updatedRanking = await this.rankingModel.findByIdAndUpdate(id, rankingData, { new: true ,runValidators:true});
    if (updatedRanking === null) {
      throw new NotFoundException(`Ranking not found with id ${id}`);
    }
    return updatedRanking;
  }
  
  async delete(id: string): Promise<void> {
    const result = await this.rankingModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Ranking not found with id ${id}`);
    }  
    return;
  }
}
