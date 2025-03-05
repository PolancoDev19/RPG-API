import { IsIn, IsNumber,IsString } from "class-validator";

export class CreateMisionDto {

   @IsString()
    nombre:string;
    
    @IsIn(['Facil', 'Medio', 'Dificil'])
    dificultad?:string;
    
    @IsNumber()
    oro: Number;

    @IsNumber()
    experiencia: Number;
    
    @IsString()
    descripcion: string;
    
    @IsString()
    tipoMision: string;
    
    @IsString()
    personaje:string;

}
