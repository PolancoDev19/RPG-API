import mongoose from 'mongoose';
import { IPersonaje } from 'personaje/personaje.model';

export const armaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    tipo: { type: String, required: true },
    daño: { type: Number, required: true },
    precio: { type: Number, required: true },
    Personaje: { type: mongoose.Schema.Types.ObjectId, ref: 'Personaje' },
});

export interface IArma extends mongoose.Document {
    nombre: string;
    tipo: string;
    daño: number;
    precio: number;
    Personaje: IPersonaje;
}