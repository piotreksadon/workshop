import { PartialType } from '@nestjs/mapped-types';
import { CreateMechanicDto } from './create-mechanic.dto';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateMechanicDto extends PartialType(CreateMechanicDto) {
  @IsNotEmpty()
  @Length(2, 100)
  @IsString()
  mechanicName: string;

  @IsNotEmpty()
  @Length(2, 100)
  @IsString()
  mechanicLastName: string;
}
