import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IArma } from './armas.model';
import { ArmaDto } from './armas.dto';

@Injectable()
export class ArmasService {
    constructor(
        @InjectModel('Armas') private  armaModel : Model <IArma>
    ) {}

    async crearArma(arma : ArmaDto) : Promise <IArma>{
        const armaCreada = new this.armaModel(arma)
        return await armaCreada.save()
    }

    async buscarTodo(): Promise<IArma[]> {
        return await this.armaModel.find().exec();
    }

    async buscarId(id: string): Promise<IArma> {
        return await this.armaModel.findById(id).exec();
    }

    async actualizar(id: string, arma: ArmaDto): Promise<IArma> {
        return await this.armaModel.findByIdAndUpdate(id, arma, { new: true }).exec();
    }

    async eliminar(id: string): Promise<IArma> {
        return await this.armaModel.findByIdAndDelete(id).exec();
    }
}