import mongoose from "mongoose";

export const AtributosSchema = new mongoose.Schema(
    {
        Fuerza: Number,
        Destreza: Number,
        Constitucion: Number,
        Inteligencia: Number,
        Sabiduria: Number,
        Carisma: Number,
    }
)
export interface IAtributos extends mongoose.Document{
    Fuerza: number;
    Destreza: number;
    Constitucion: number;
    Inteligencia: number;
    Sabiduria: number;
    Carisma: number

}
