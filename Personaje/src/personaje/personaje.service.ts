import { Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPersonaje } from './personaje.model';
import { PersonajeDto } from './personaje.dto';

@Injectable()
export class PersonajeService {
constructor (@InjectModel('Personaje') private mensajePersonaje: Model<IPersonaje>){}


    Entra_en_este_nuevo_mundo (){
        return "Bienvenido al juego"
  
    } 
    

    //CRUD
async CrearPersonaje(personajes:PersonajeDto){
    const respuesta = new this.mensajePersonaje(personajes)
    return await respuesta.save()
}    

async ConsultarTodos(){
    const respuesta= await this.mensajePersonaje.find().exec()
    return respuesta
}

async BuscarxId(id: string){
    const respuesta= await this.mensajePersonaje.findById(id).exec()
    return respuesta
}

async Actualizar (id: string, Modificarpersonaje: PersonajeDto){
    const respuesta = await this.mensajePersonaje.findByIdAndUpdate(id, Modificarpersonaje,{new:true}).exec()
    return respuesta
}

async Subirnivel (id: string, Subirnivel: PersonajeDto){
    const respuesta = await this.mensajePersonaje.findByIdAndUpdate(id, Subirnivel,{new:true}).exec()
    return respuesta
}

async Mejoraratributos(id: string, nuevosAtributos: PersonajeDto) {
    const respuesta = await this.mensajePersonaje.findByIdAndUpdate(id, nuevosAtributos, {new: true}).exec();
    return respuesta;
}
}