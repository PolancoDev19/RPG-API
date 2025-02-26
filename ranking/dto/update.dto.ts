import { PartialType } from '@nestjs/mapped-types';
import { CreateRanking } from './ranking.dto';

export class UpdateRanking extends PartialType(CreateRanking){}