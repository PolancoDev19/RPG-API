import mongoose from 'mongoose';
import { IPersonaje } from 'personaje/personaje.model';

export const armaduraSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    tipo: { type: String, required: true },
    defensa: { type: Number, required: true },
    precio: { type: Number, required: true },
    Personaje: { type: mongoose.Schema.Types.ObjectId, ref: 'Personaje' },
});

export interface IArmadura extends mongoose.Document {
    nombre: string;
    tipo: string;
    defensa: number;
    precio: number;
    Personaje: IPersonaje;
}