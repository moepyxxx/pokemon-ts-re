import { Injectable } from '@nestjs/common';
import { IBookPokemons, ISummaryBookPokemons } from './interface';

@Injectable()
export class BookPokemonsService {

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


  findDetailOne(id: number): IBookPokemons {
    return {
      id,
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
