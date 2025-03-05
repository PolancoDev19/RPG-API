import mongoose from "mongoose";

export const Sub_NivelSchema = new mongoose.Schema(
    {
        NivelActual: Number,
        ExperienciaActual: Number,
        ExperienciaNecesaria: Number,
        HabilidadesDesbloqueadas: String,
        PuntosDeHabilidad: Number
    }
)
export interface ISub_Nivel extends mongoose.Document
{
    NivelActual: number;  
    ExperienciaActual: number;
    ExperienciaNecesaria: number;
    HabilidadesDesbloqueadas: string;
    PuntosDeHabilidad: number; 
}