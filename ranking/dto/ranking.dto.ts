import { IsNumber, IsString } from "class-validator";

export class CreateRanking{
    
    @IsString()
    Nombre:string;
    
    @IsNumber()
    Nivel: number;
    
    @IsString()
    Rango: string;

    @IsNumber()
    Experiencia: number;

    @IsNumber()
    Oro: number
}