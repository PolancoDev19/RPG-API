import mongoose from "mongoose";
import { IUser } from "src/user/usuar.model";

export const PersonajeSchema = new mongoose.Schema(
    {
        User: { type: mongoose.Schema.Types.ObjectId, required: true },
        Tipo_Arma: { type: String, required: true },
        Nivel_Vida: { type: Number, required: true },
        Distancia_Arma: { type: String, required: true },
        Nivel_Daño: { type: Number, required: true },
        Velocidad: { type: String, required: true }, 
    }
)
export interface IPersonaje extends mongoose.Document{
    User: IUser;
    Tipo_Arma: string;
    Nivel_Vida: number;
    Distancia_Arma: string;
    Nivel_Daño: number;
    Velocidad: string 
}