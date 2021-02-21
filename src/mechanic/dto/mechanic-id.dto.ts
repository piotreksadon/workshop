import { IsNotEmpty, IsNumberString } from 'class-validator';

export class MechanicIdDto {
  @IsNumberString()
  @IsNotEmpty()
  id: number;
}
