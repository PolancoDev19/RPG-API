import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { CrearUserDto } from './dto/user.dto';
import { Model } from 'mongoose';
import { ActualizarUserDto } from './dto/userActualizar.dto';


@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    findAll(){
        return this.userModel.find()
    }

    async crear(crearUser: CrearUserDto){
        const user = new this.userModel(crearUser);
        return await user.save()
    }

    async findOne(id:string){
        return this.userModel.findById(id);
    }

    async eliminar(id:string){
        return this.userModel.findByIdAndDelete(id);
    }

    async actualizar(id:string, user:ActualizarUserDto){
        return this.userModel.findByIdAndUpdate(id, user, { new:true })
    }
}
