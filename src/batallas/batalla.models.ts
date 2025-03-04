import mongoose from "mongoose";

// Definición del enum EstadoBatalla
enum EstadoBatalla {
    EN_PROGRESO = 'en progreso',
    FINALIZADO = 'finalizado',
    EMPATE = 'empate',
  }
  
//Schema de batalla
export const BatallaSchema = new mongoose.Schema(
    {
        personaje1 : {type: String, required: true},
        personaje2: {type: String, required: true},
        ganador: {type: String, required: true},
        estadoBatalla: {
            type: String, 
            enum: Object.values(EstadoBatalla),
            default: EstadoBatalla.EN_PROGRESO, // por defecto dejar en progreso
        },
        fecha: {type: Date, required: true},
        arena: {type: String, required: true},
        experiencia:{type: Number, required: true},
        oro:{type: Number, required: true}
    }
)

export interface IBatalla extends mongoose.Document {
    personaje1 : string,
    personaje2 : string,
    ganador : string,
    estadoBatalla: EstadoBatalla;
    fecha : Date,
    arena : string,
    experiencia : number,
    oro : number
}