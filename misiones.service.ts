import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Mision } from './schemas/mision.schema';
import { CreateMisionDto } from './dto/Create-mision.dto';
import { UpdateMisionDto } from './dto/update-mision.dto';
import { Personaje } from 'src/personajes/schemas/personaje.schema';
//import { UserService } from '../users/user.service';

@Injectable()
export class MisionesService {
  constructor(
    @InjectModel('Mision') private readonly misionModel: Model<Mision>,
    //private readonly userService: UserService,
  @InjectModel('Mision') private readonly personajeModel: Model<Mision>,
    //private readonly userService: UserService,
  ) {}

  async create(createMisionDto: CreateMisionDto): Promise<Mision> {
    const CreatedMision = new this.misionModel(createMisionDto);
    return CreatedMision.save();
  }

  async findAll() : Promise<Mision[]>{
    return this.misionModel.find().exec();
  }

  async findById(id: string): Promise<Mision> {
    const mision = await this.misionModel.findById(id).exec();
    if (!mision) {
      throw new NotFoundException(`Mission with ID ${id} not found`);
    }
    return mision;
  }

  async update(id: string, updateMisionDto: UpdateMisionDto): Promise<Mision> {
    const updatedMision = await this.misionModel.findByIdAndUpdate(
      id, 
      updateMisionDto, 
      { new: true }
    ).exec();
    if (!updatedMision) {
      throw new NotFoundException(`Mission with ID ${id} not found`);
    }
    return updatedMision;
  }

  async delete(id: string): Promise<Mision> {
    const deletedMision = await this.misionModel.findByIdAndDelete(id).exec();
    if (!deletedMision) {
      throw new NotFoundException(`Mission with ID ${id} not found`);
    }
    return deletedMision;
  }
  
  async completarMision(misionId: string, personajeId: string): Promise<any> {
    const mision = await this.misionModel.findById(misionId).exec();
    const personaje = await this.personajeModel.findById(personajeId).exec();

    if (!mision || !personaje) {
      throw new Error('Misión o personaje no encontrado');
    }



    /*personaje.oro += mision.recompensaOro;
    personaje.experiencia += mision.recompensaExperiencia;

    return personaje.save();
  */
  }
}