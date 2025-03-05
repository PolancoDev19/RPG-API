import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPocion } from './pociones.model';
import { PocionDto } from './pociones.dto';

@Injectable()
export class PocionesService {

    constructor(
        @InjectModel('Pociones') private pocionesModel : Model <IPocion>
    ){}

    async crearPocion(pocion : PocionDto) : Promise <IPocion>{
        const pocionCreada = new this.pocionesModel(pocion)
        return await pocionCreada.save()
    }

    async buscarTodo(): Promise<IPocion[]> {
        return await this.pocionesModel.find().exec();
    }

    async buscarId(id: string): Promise<IPocion> {
        return await this.pocionesModel.findById(id).exec();
    }

    async actualizar(id: string, pocion: PocionDto): Promise<IPocion> {
        return await this.pocionesModel.findByIdAndUpdate(id, pocion, { new: true }).exec();
    }

    async eliminar(id: string): Promise<IPocion> {
        return await this.pocionesModel.findByIdAndDelete(id).exec();
    }
}