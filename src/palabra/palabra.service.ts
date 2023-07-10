import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePalabraDto } from './dto/create-palabra.dto';
import { UpdatePalabraDto } from './dto/update-palabra.dto';
import { Palabra } from './entities/palabra.entity';

@Injectable()
export class PalabraService {
  private palabras: Palabra[] = [
    { id: 1, palabra: 'hola', deletreo: 'ache o ele a' },
    { id: 2, palabra: 'como', deletreo: 'ce o eme o' },
  ];

  create(createPalabraDto: CreatePalabraDto) {
    const palabra = new Palabra();
    palabra.id =
      Math.max(...this.palabras.map((elemento) => elemento.id), 0) + 1;
    palabra.palabra = createPalabraDto.palabra;
    palabra.deletreo = createPalabraDto.deletreo;
    this.palabras.push(palabra);
    return palabra;
  }

  findAll(): Palabra[] {
    return this.palabras;
  }

  findOne(id: number) {
    const palabra = this.palabras.find((palabra) => palabra.id === id);
    if (!palabra) throw new NotFoundException(`ID ${id} not found`);
    return palabra;
  }

  update(id: number, updatePalabraDto: UpdatePalabraDto) {
    const { palabra, deletreo } = updatePalabraDto;
    const palabraEncontrada = this.findOne(id);
    if (palabra) palabraEncontrada.palabra = palabra;
    if (deletreo) palabraEncontrada.deletreo = deletreo;
    this.palabras = this.palabras.map((elemento) => {
      if (elemento.id === id) return palabraEncontrada;
      return palabraEncontrada;
    });
    return palabra;
  }

  remove(id: number) {
    this.findOne(id);
    this.palabras = this.palabras.filter((elemento) => elemento.id !== id);
  }
}
