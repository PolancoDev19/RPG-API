import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BatallasModule } from './batallas/batallas.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://senadso2823620:Colombia2025*@cluster0.qtfgw.mongodb.net/batallas'),
    BatallasModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
