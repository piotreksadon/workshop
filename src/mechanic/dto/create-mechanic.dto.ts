import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateMechanicDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  email: string;
}
