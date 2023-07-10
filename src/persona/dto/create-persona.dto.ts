import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
export class CreatePersonaDto {
  @IsNotEmpty()
  @IsString()
  identificacion: string;

  @IsNotEmpty()
  @IsString()
  nombre: string;
}
