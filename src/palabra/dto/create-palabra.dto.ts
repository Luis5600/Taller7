import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePalabraDto {
  @IsString()
  @IsNotEmpty()
  palabra: string;

  @IsString()
  @IsNotEmpty()
  deletreo: string;
}
