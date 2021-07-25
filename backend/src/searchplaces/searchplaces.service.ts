import { Injectable } from '@nestjs/common';
import { ISearchPlace } from './interface';

@Injectable()
export class SearchplacesService {

  places: ISearchPlace[] = [{
    id: 1,
    slug: 'mizube',
    text: 'みずべ',
    icon: '🐳',
    pokemonTypeIds: [10]
  }, {
    id: 2,
    slug: 'kusamura',
    text: 'くさむら',
    icon: '🌱',
    pokemonTypeIds: [4, 6, 11, 17]
  }, {
    id: 3,
    slug: 'yukiyama',
    text: 'ゆきやま',
    icon: '⛄',
    pokemonTypeIds: [14, ]
  }, {
    id: 4,
    slug: 'mori',
    text: 'もり',
    icon: '🌲',
    pokemonTypeIds: [3, 6, 11]
  }, {
    id: 5,
    slug: 'sora',
    text: 'そら',
    icon: '✈',
    pokemonTypeIds: [2, 15]
  }, {
    id: 6,
    slug: 'doukutsu',
    text: 'どうくつ',
    icon: '🌋',
    pokemonTypeIds: [5, 7, 8, 4, 16]
  }, {
    id: 7,
    slug: 'heichi',
    text: 'へいち',
    icon: '🚴',
    pokemonTypeIds: [0, 1, 9, 12]
  }, {
    id: 8,
    slug: 'machi',
    text: 'まち',
    icon: '🏫',
    pokemonTypeIds: [0, 1, 13]
  }];

  findAll(): ISearchPlace[] {
    return this.places;
  }

  findOne(slug: string): ISearchPlace {
    return this.findAll().find(searchplace => {
      return searchplace.slug === slug;
    });
  }

}
