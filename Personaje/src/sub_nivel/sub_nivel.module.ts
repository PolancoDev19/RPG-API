import { Module } from '@nestjs/common';
import { SubNivelController } from './sub_nivel.controller';
import { SubNivelService } from './sub_nivel.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Sub_NivelSchema } from './sub_nivel.mdel';


@Module({
  imports: [MongooseModule.forFeature([{name:'Sub_Nivel',schema:Sub_NivelSchema}])   ],
  controllers: [SubNivelController],
  providers: [SubNivelService]
})
export class SubNivelModule {}
