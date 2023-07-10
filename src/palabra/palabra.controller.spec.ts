import { Test, TestingModule } from '@nestjs/testing';
import { PalabraController } from './palabra.controller';
import { PalabraService } from './palabra.service';

describe('PalabraController', () => {
  let controller: PalabraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PalabraController],
      providers: [PalabraService],
    }).compile();

    controller = module.get<PalabraController>(PalabraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
