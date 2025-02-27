import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class PocionDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    efecto: string;

    @IsNumber() 
    @IsNotEmpty()
    precio: number;
}