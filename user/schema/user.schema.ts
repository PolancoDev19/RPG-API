import  { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

export type UserDocument = User & Document;

@Schema({
    timestamps:true,
})
export class User{
    @Prop({
        required: true,
        unique: true, 
    })
    idusuario:number;

    @Prop({
        required:true,
        unique:true,
    })
    nombre:string;

    @Prop({
        required:true,
    })
    rol:string;

    @Prop({
        required:true,
        unique:true,
    })
    username:string;

    @Prop({
        required:true,
        unique:true
    })
    email:string;

    @Prop({
        required: true,
        unique: true
    })
    password:string;
}

export const UserSchema = SchemaFactory.createForClass(User);