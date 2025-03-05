import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IArmadura } from './armaduras.model';
import { ArmaduraDto } from './armaduras.dto';

@Injectable()
export class ArmadurasService {
    constructor (
        @InjectModel ('Armaduras') private armaduraModel : Model <IArmadura>
    ) {}

    async crearArmadura(armadura : ArmaduraDto) : Promise <IArmadura>{
        const armaduraCreada = new this.armaduraModel(armadura)
        return await armaduraCreada.save()
    }

    async buscarTodo(): Promise<IArmadura[]> {
        return await this.armaduraModel.find().exec();
    }

    async buscarId(id: string): Promise<IArmadura> {
        return await this.armaduraModel.findById(id).exec();
    }

    async actualizar(id: string, armadura: ArmaduraDto): Promise<IArmadura> {
        return await this.armaduraModel.findByIdAndUpdate(id, armadura, { new: true }).exec();
    }

    async eliminar(id: string): Promise<IArmadura> {
        return await this.armaduraModel.findByIdAndDelete(id).exec();
    }
}