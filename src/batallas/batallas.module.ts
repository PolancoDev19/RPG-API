import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BatallasController } from './batallas.controller';
import { BatallasService } from './batallas.service';
import { BatallaSchema } from './schemas/batalla.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Batalla', schema: BatallaSchema }])],
  controllers: [BatallasController],
  providers: [BatallasService]
})
export class BatallasModule {}
