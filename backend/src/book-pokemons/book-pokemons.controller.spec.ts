import { Test, TestingModule } from '@nestjs/testing';
import { BookPokemonsController } from './book-pokemons.controller';

describe('BookPokemonsController', () => {
  let controller: BookPokemonsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookPokemonsController],
    }).compile();

    controller = module.get<BookPokemonsController>(BookPokemonsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
