import { Module } from '@nestjs/common';
import { PalabraService } from './palabra.service';
import { PalabraController } from './palabra.controller';

@Module({
  controllers: [PalabraController],
  providers: [PalabraService]
})
export class PalabraModule {}
