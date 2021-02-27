import { IsNotEmpty, IsNumberString } from 'class-validator';

export class GarageIdDto {
  @IsNumberString()
  @IsNotEmpty()
  id: number;
}
