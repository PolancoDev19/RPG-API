import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/user/schema/user.schema';
import { jwtConstants } from './constants';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [MongooseModule.forFeature([{'name': 'User', schema: UserSchema}]),  JwtModule.register({
    global: true,
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60s' },

  })],
  controllers: [AuthController],
  providers: [AuthService, JwtService, UserService],
  
})
export class AuthModule {}
