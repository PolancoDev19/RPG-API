import { Module } from '@nestjs/common';
import { ArmasController } from './armas.controller';
import { ArmasService } from './armas.service';
import { MongooseModule } from '@nestjs/mongoose';
import { armaSchema } from './armas.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Armas', schema: armaSchema }])
  ],
  controllers: [ArmasController],
  providers: [ArmasService],
})
export class ArmasModule {}