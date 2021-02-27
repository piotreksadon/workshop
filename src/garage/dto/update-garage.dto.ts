import { IsNotEmpty, IsString, Length } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateGarageDto } from './create-garage.dto';

export class UpdateGarageDto extends PartialType(CreateGarageDto) {
  @IsNotEmpty()
  @Length(1, 100)
  @IsString()
  name: string;
}
