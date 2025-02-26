import { Document, Schema } from 'mongoose';
import mongoose from 'mongoose';

export const RankingSchema = new Schema ({
  Nombre:{type: String, required: true},
  Nivel:{type:Number,required: true},
  Rango:{type: String, required:true},
  Experiencia:{type: Number, required: true},
  Oro:{type: Number, required: true},
});

export interface Ranking extends Document{
  Nombre: string;
  Nivel: number;
  Rango: string;
  Experiencia: number;
  Oro: number;
};
