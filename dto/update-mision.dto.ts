
import { PartialType } from '@nestjs/mapped-types';
import { CreateMisionDto } from './Create-mision.dto';

export class UpdateMisionDto extends PartialType(CreateMisionDto) {}

