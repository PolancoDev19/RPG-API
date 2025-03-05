import { IUser } from "src/user/usuar.model";
import { IsString, IsNumber } from '@nestjs/class-validator';

export class PersonajeDto{

    @IsString()
    User: IUser;
    @IsString()
    Tipo_Arma: string;
    @IsNumber()
    Nivel_Vida: number;
    @IsString()
    Distancia_Arma: string;
    @IsNumber()
    Nivel_Daño: number;
    @IsString()
    Velocidad: string 

}