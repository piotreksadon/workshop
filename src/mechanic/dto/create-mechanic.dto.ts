import {
  IsEmail,
  IsLowercase,
  IsNotEmpty,
  IsString,
  Length,
} from 'class-validator';

export class CreateMechanicDto {
  @IsNotEmpty()
  @Length(2, 100)
  @IsString()
  name: string;

  @IsNotEmpty()
  @Length(2, 100)
  @IsString()
  lastName: string;

  @IsLowercase()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
