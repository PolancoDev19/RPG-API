import {  IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator'

export class CrearUserDto{
    @IsNotEmpty()
    idusuario: number;    

    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    rol:string;

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @MinLength(4)
    @MaxLength(12)
    password:string;
}