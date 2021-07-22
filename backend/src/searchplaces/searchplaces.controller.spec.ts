import { Test, TestingModule } from '@nestjs/testing';
import { SearchplacesController } from './searchplaces.controller';

describe('SearchplacesController', () => {
  let controller: SearchplacesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchplacesController],
    }).compile();

    controller = module.get<SearchplacesController>(SearchplacesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
