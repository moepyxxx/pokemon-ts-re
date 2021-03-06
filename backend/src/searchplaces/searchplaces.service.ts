import { Injectable } from '@nestjs/common';
import { ISearchPlace } from './interface';

@Injectable()
export class SearchplacesService {

  places: ISearchPlace[] = [{
    id: 1,
    slug: 'mizube',
    text: 'γΏγγΉ',
    icon: 'π³',
    pokemonTypeIds: [10]
  }, {
    id: 2,
    slug: 'kusamura',
    text: 'γγγγ',
    icon: 'π±',
    pokemonTypeIds: [4, 6, 11, 17]
  }, {
    id: 3,
    slug: 'yukiyama',
    text: 'γγγγΎ',
    icon: 'β',
    pokemonTypeIds: [14, ]
  }, {
    id: 4,
    slug: 'mori',
    text: 'γγ',
    icon: 'π²',
    pokemonTypeIds: [3, 6, 11]
  }, {
    id: 5,
    slug: 'sora',
    text: 'γγ',
    icon: 'β',
    pokemonTypeIds: [2, 15]
  }, {
    id: 6,
    slug: 'doukutsu',
    text: 'γ©γγγ€',
    icon: 'π',
    pokemonTypeIds: [5, 7, 8, 4, 16]
  }, {
    id: 7,
    slug: 'heichi',
    text: 'γΈγγ‘',
    icon: 'π΄',
    pokemonTypeIds: [0, 1, 9, 12]
  }, {
    id: 8,
    slug: 'machi',
    text: 'γΎγ‘',
    icon: 'π«',
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
