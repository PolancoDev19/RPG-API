import { IsNotEmpty, IsNumber, IsObject, IsString } from "class-validator";
import { IPersonaje } from "personaje/personaje.model";

export class ArmaduraDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    tipo: string;

    @IsNumber()
    @IsNotEmpty()
    defensa: number;

    @IsNumber()
    @IsNotEmpty()
    precio: number;

    @IsObject()
    Personaje: IPersonaje;
}