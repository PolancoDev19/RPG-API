import { IsNotEmpty, IsNumber, IsObject, IsString } from "class-validator";
import { IPersonaje } from "personaje/personaje.model";


export class ArmaDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    tipo: string;

    @IsNumber()
    @IsNotEmpty()
    daño: number;

    @IsNumber()
    @IsNotEmpty()
    precio: number;

    @IsObject()
    Personaje: IPersonaje;
}