import mongoose from "mongoose"

export const UsuariosSchema= new mongoose.Schema(
    {
        id: Number,
        email: String,
        password: String,
        nickname: String,
        edad: Number,
        telefono: Number

    }
)

export interface IUsuarios extends mongoose.Document{
    id: number;
    email: string;
    password: string;
    nickname: string;
    edad: number;
    telefono: number;
}