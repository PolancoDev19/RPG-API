import {Controller,Get,Post, Delete, Put,Body, Param, NotFoundException,ConflictException, HttpCode,} from '@nestjs/common';
import { UserService } from './user.service';
import { CrearUserDto } from './dto/user.dto';



@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService ){}

    @Get()
    findAll(){
        return this.userService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id:string){
        const user = await this.userService.findOne(id);
        if(!user) throw new NotFoundException('User no encontrado')
        return user;
    }

    @Post()
    async crear(@Body() body: CrearUserDto){
        try{
            return await this.userService.crear(body)
        }  catch (error){
            if(error.code === 11000){
                throw new ConflictException('Usuario ya existe');
            }
            throw error;
        }
    }

    @Delete(':id')
    @HttpCode(204)
    async eliminar(@Param('id') id:string){
        const user = await this.userService.eliminar(id)
        if(!user) throw new NotFoundException('User no encontrado')
        return user;
    }

    @Put(':id')
    async actualizar(@Param('id') id:string, @Body() body:any){
        const user = await this.userService.actualizar(id, body);
        if(!user) throw new NotFoundException('User no encontrado')
        return user;
    }

}
