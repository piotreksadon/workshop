import { IsNotEmpty, IsNumberString } from 'class-validator';

export class CarIdDto {
  @IsNumberString()
  @IsNotEmpty()
  id: number;
}
