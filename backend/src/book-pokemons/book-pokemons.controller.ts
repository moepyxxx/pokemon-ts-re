import { Controller, Get, Param } from '@nestjs/common';
import { ISummaryBookPokemons, IBookPokemons } from './interface';

@Controller('book-pokemons')
export class BookPokemonsController {
  @Get()
  findSummaryAll(): ISummaryBookPokemons[] {
    return [{
      id: 1,
      name: 'フシギダネ',
      image: 'string-image-1',
      type: [{
        id: 3,
        name: 'くさ'
      }]
    }, {
      id: 2,
      name: 'フシギソウ',
      image: 'string-iamge-2',
      type: [{
        id: 3,
        name: 'くさ'
      }]
    }];
  }

  @Get(':id')
  findDetailOne(@Param() params): IBookPokemons {
    return {
      id: params.id,
      name: 'フシギダネ',
      image: 'string-image-1',
      type: [{
        id: 3,
        name: 'くさ'
      }],
      abilities: {
        name: 'のうりょく',
        description: 'こんなのうりょくである'
      },
      height: 30,
      weight: 30,
      species: 'しゅのとくちょうがあります'
    }
  }
}
