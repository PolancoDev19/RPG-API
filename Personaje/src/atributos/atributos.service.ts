import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IAtributos } from './atributos.model';
import { Model } from 'mongoose';
import { AtributosDto } from './atributos.dto';

@Injectable()
export class AtributosService {
constructor (@InjectModel('Atributos') private mensajedeatributo: Model<IAtributos>){}


    Entra_en_este_nuevo_mundo (){
        return "Bienvenido al juego"
  
    } 
    

    //CRUD
async CrearAtributo(atributos:AtributosDto){
    const respuesta = new this.mensajedeatributo(atributos)
    return await respuesta.save()
}    

async ConsultarTodos(){
    const respuesta= await this.mensajedeatributo.find().exec()
    return respuesta
}

async BuscarxId(id: string){
    const respuesta= await this.mensajedeatributo.findById(id).exec()
    return respuesta
}

async Actualizar (id: string, Modificaratributos: AtributosDto){
    const respuesta = await this.mensajedeatributo.findByIdAndUpdate(id, Modificaratributos,{new:true}).exec()
    return respuesta
}

async Mejoraratributos(id: string, nuevosAtributos: AtributosDto) {
    const respuesta = await this.mensajedeatributo.findByIdAndUpdate(id, nuevosAtributos, {new: true}).exec();
    return respuesta;
}
}