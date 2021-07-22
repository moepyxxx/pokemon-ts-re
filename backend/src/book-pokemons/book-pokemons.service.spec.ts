import { Test, TestingModule } from '@nestjs/testing';
import { BookPokemonsService } from './book-pokemons.service';

describe('BookPokemonsService', () => {
  let service: BookPokemonsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookPokemonsService],
    }).compile();

    service = module.get<BookPokemonsService>(BookPokemonsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
