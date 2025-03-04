import { Schema, Document } from 'mongoose';

export const BatallaSchema = new Schema({
    personaje1: { type: Schema.Types.ObjectId, ref: 'Personaje', required: true }, // Referencia al esquema de Personaje
    personaje2: { type: Schema.Types.ObjectId, ref: 'Personaje', required: true }, // Referencia al esquema de Personaje
    ganador: { type: Schema.Types.ObjectId, required: false }, // ID del personaje ganador
    fecha: { type: Date, default: Date.now }, // Fecha de la batalla
    arena: { type: Schema.Types.ObjectId, ref: 'Arena', required: true }, // Referencia al esquema de Personaje
    experiencia: { type: Schema.Types.ObjectId, ref: 'Experiencia', required: true},
    oro: { type: Schema.Types.ObjectId, ref: 'Oro', required: true}
});

export interface Batalla extends Document {
    personaje1: Schema.Types.ObjectId;
    personaje2: Schema.Types.ObjectId;
    ganador?: Schema.Types.ObjectId;
    fecha: Date;
    arena: Schema.Types.ObjectId;
    experiencia: Schema.Types.ObjectId;
    oro: Schema.Types.ObjectId;
}