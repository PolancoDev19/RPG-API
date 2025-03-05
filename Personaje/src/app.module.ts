import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonajeModule } from './personaje/personaje.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AtributosModule } from './atributos/atributos.module';
import { SubNivelModule } from './sub_nivel/sub_nivel.module';
import { UserModule } from './user/user.module';



@Module({
  imports: [PersonajeModule, AtributosModule, SubNivelModule,
  MongooseModule.forRoot('mongodb+srv://Admin:Vly7m5GCIWJGtqtf@cluster0.jukgx.mongodb.net/Fintechia'),
  AtributosModule,
  UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
