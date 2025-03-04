import { IsString, IsNumber, IsDate} from "@nestjs/class-validator";
import { IsEnum } from "class-validator";

enum EstadoBatalla { //solo se toma uno
    EN_PROGRESO = 'en progreso',
    FINALIZADO = 'finalizado',
    EMPATE = 'empate',
}

export class SimularBatallaDto {

    @IsString()
    personaje1: string;

    @IsString()
    personaje2: string;

    @IsEnum(EstadoBatalla)
    estadoBatalla: EstadoBatalla;

    @IsString()
    ganador: string;

    @IsDate()
    fecha: Date;

    @IsString()
    arena: string;

    @IsNumber()
    experiencia: number;

    @IsNumber()
    oro: number;


    }