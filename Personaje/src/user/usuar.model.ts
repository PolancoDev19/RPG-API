import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({})
export interface IUser  extends mongoose.Document{}

export default mongoose.model<IUser>('User', UserSchema);
export interface IUser extends mongoose.Document {
    user: mongoose.Schema.Types.ObjectId;
    idusuario: string[];
    usernombre: string;
    correo: string;
    password: string;
}