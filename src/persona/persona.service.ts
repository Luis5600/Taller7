import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { Persona } from './entities/persona.entity';

@Injectable()
export class PersonaService {
  private personas: Persona[] = [
    { id: 1, identificacion: '131385', nombre: 'Andres Mendoza' },
    { id: 2, identificacion: '131456', nombre: 'Luis Rodas' },
  ];

  create(createPersonaDto: CreatePersonaDto) {
    const persona = new Persona();
    persona.id =
      Math.max(...this.personas.map((elemento) => elemento.id), 0) + 1;
    persona.identificacion = createPersonaDto.identificacion;
    persona.nombre = createPersonaDto.nombre;
    this.personas.push(persona);
    return persona;
  }

  findAll(): Persona[] {
    return this.personas;
  }

  findOne(id: number) {
    const persona = this.personas.find((persona) => persona.id === id);
    if (!persona) throw new NotFoundException(`ID ${id} not found`);
    return persona;
  }

  update(id: number, updatePersonaDto: UpdatePersonaDto) {
    const { identificacion, nombre } = updatePersonaDto;
    const persona = this.findOne(id);
    if (identificacion) persona.identificacion = identificacion;
    if (nombre) persona.nombre = nombre;
    this.personas = this.personas.map((elemento) => {
      if (persona.id === id) return persona;
      return persona;
    });
    return persona;
  }

  remove(id: number) {
    this.findOne(id);
    this.personas = this.personas.filter((elemento) => elemento.id !== id);
  }
}
