import { Test, TestingModule } from '@nestjs/testing';
import { SearchplacesService } from './searchplaces.service';

describe('SearchplaceService', () => {
  let service: SearchplacesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SearchplacesService],
    }).compile();

    service = module.get<SearchplacesService>(SearchplacesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
