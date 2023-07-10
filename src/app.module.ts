import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PalabraModule } from './palabra/palabra.module';
import { PersonaModule } from './persona/persona.module';

@Module({
  imports: [PalabraModule, PersonaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
