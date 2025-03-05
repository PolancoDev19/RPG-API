import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Sub_NivelDto } from './sub_nivel.dto';
import { Model } from 'mongoose';
import { ISub_Nivel } from './sub_nivel.mdel';

@Injectable()
export class SubNivelService {
constructor (@InjectModel('Sub_Nivel') private mensajesubnivel: Model<ISub_Nivel>){}


    Entra_en_este_nuevo_mundo (){
        return "Bienvenido al juego"
  
    } 
    

    //CRUD
async Crearnivel(subirnivel:Sub_NivelDto){
    const respuesta = new this.mensajesubnivel(subirnivel)
    return await respuesta.save()
}    

async ConsultarTodos(){
    const respuesta= await this.mensajesubnivel.find().exec()
    return respuesta
}

async BuscarxId(id: string){
    const respuesta= await this.mensajesubnivel.findById(id).exec()
    return respuesta
}

async Actualizar (id: string, Modificarnivel: Sub_NivelDto){
    const respuesta = await this.mensajesubnivel.findByIdAndUpdate(id, Modificarnivel,{new:true}).exec()
    return respuesta
}

async Subirnivel (id: string, Subirnivel: Sub_NivelDto){
    const respuesta = await this.mensajesubnivel.findByIdAndUpdate(id, Subirnivel,{new:true}).exec()
    return respuesta
}
}