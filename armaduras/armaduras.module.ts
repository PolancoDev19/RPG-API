import { Module } from '@nestjs/common';
import { ArmadurasController } from './armaduras.controller';
import { ArmadurasService } from './armaduras.service';
import { MongooseModule } from '@nestjs/mongoose';
import { armaduraSchema } from './armaduras.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Armaduras', schema: armaduraSchema }])
  ],
  controllers: [ArmadurasController],
  providers: [ArmadurasService],
})
export class ArmadurasModule {}