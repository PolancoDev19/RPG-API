import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Batalla } from './schemas/batalla.schema';
import { IBatalla } from './batalla.models';
import { SimularBatallaDto } from './batalla.dto';
//import { Personaje } from '../personajes/schemas/personaje.schema'; // esquema personajes

@Injectable() //Inyectar en otra clase enviar y extraer - ME VA DAR LA LOGICA
export class BatallasService {
    constructor(
        @InjectModel('Batalla') private batallaModel: Model <IBatalla> // Interface porque llevo y traigo
        //@InjectModel('Personaje') private readonly personajeModel: Model<Personaje>, // modelo personaje
    ) {}

    async crearBatalla(batalla: SimularBatallaDto): Promise <IBatalla>{
        const batallaCreada = new this.batallaModel(batalla) //tomar este producto y enviar a la base de datos
        return await batallaCreada.save() //tomar lo de la base de datos y guarda
    } //ESTO ME CREA LA BATALLA EN LA BASE DE DATOS

    async CosultarBatallas(){
        const respuesta = await this.batallaModel.find().exec() //find para que me busque
        return respuesta
    }

    async ConsultarBatallasId(id: string){
        const respuesta = await this.batallaModel.findById(id)
        return respuesta
    }











}


    





















/*
  // Simular una batalla entre dos personajes
    async simularBatalla(personaje1Id: string, personaje2Id: string): Promise<Batalla> {
        //const personaje1 = await this.personajeModel.findById(personaje1Id).exec();
        //const personaje2 = await this.personajeModel.findById(personaje2Id).exec();

    //if (!personaje1 || !personaje2) {
        throw new NotFoundException('Uno o ambos personajes no existen');
        }

    // Lógica para determinar el ganador
    const puntuacionPersonaje2 = personaje2.fuerza + personaje2.agilidad + personaje2.resistencia;

    const ganadorId = puntuacionPersonaje1 > puntuacionPersonaje2 ? personaje1._id : personaje2._id;

    // Crear y guardar la batalla
    const batalla = new this.batallaModel({
        personaje1: personaje1._id,
        personaje2: personaje2._id,
        ganadorId,
        fecha: new Date(),
    });

    return batalla.save();
    }

  // Obtener todas las batallas
    async obtenerBatallas(): Promise<Batalla[]> {
        return this.batallaModel.find().populate('personaje1 personaje2').exec();
    }

  // Obtener una batalla por ID
    async obtenerBatallaPorId(id: string): Promise<Batalla> {
        const batalla = await this.batallaModel.findById(id).populate('personaje1 personaje2').exec();
        if (!batalla) {
        throw new NotFoundException('Batalla no encontrada');
        }
        return batalla;
    }
    }
     */