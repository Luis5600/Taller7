import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PalabraService } from './palabra.service';
import { CreatePalabraDto } from './dto/create-palabra.dto';
import { UpdatePalabraDto } from './dto/update-palabra.dto';
import { Palabra } from './entities/palabra.entity';

@Controller('palabra')
export class PalabraController {
  constructor(private readonly palabraService: PalabraService) {}

  @Post()
  create(@Body() createPalabraDto: CreatePalabraDto) {
    return this.palabraService.create(createPalabraDto);
  }

  @Get()
  findAll(): Palabra[] {
    return this.palabraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.palabraService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePalabraDto: UpdatePalabraDto) {
    return this.palabraService.update(+id, updatePalabraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.palabraService.remove(+id);
  }
}
