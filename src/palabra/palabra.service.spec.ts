import { Test, TestingModule } from '@nestjs/testing';
import { PalabraService } from './palabra.service';

describe('PalabraService', () => {
  let service: PalabraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PalabraService],
    }).compile();

    service = module.get<PalabraService>(PalabraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
