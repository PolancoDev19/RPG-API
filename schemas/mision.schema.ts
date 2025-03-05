import { Schema, Document } from 'mongoose';

export const MisionSchema = new Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  dificultad: { type: String, enum:['Facil' , 'Medio', 'Difici'], required:true}, // 'facil', 'media', 'dificil'
  recompensaOro: { type: Number, required: true },
  recompensaExperiencia: { type: Number, required: true },
});


export interface Mision extends Document {
  id: string;
  nombre: string;
  descripcion: string;
  dificultad: string;
  recompensaOro: number;
  recompensaExperiencia: number;
}
