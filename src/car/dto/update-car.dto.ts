import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

export class UpdateCarDto {
  @IsNotEmpty()
  @Length(2, 100)
  @IsString()
  brand: string;

  @IsNotEmpty()
  @Length(2, 100)
  @IsString()
  model: string;

  @IsNotEmpty()
  @IsNumber()
  productionYear: number;

  @IsNotEmpty()
  @IsString()
  @Length(2, 500)
  repairNote: string;

  @IsNotEmpty()
  @IsString()
  @Length(2, 500)
  color: string;
}
