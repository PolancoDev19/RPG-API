import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RankingService } from './ranking.service';
import { RankingSchema } from './ranking.schema';
import { RankingController } from './ranking.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Ranking', schema: RankingSchema}])

  ],
  providers: [RankingService],
  controllers: [RankingController],
})
export class RankingModule {}