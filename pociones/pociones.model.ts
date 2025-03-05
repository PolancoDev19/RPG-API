import mongoose from "mongoose";

export const pocionSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    efecto: { type: String, required: true },
    precio: { type: Number, required: true }
});

export interface IPocion extends mongoose.Document {
    nombre: string;
    efecto: string;
    precio: number;
    personaje: mongoose.Schema.Types.ObjectId;
}