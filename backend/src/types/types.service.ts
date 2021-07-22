import { Injectable } from '@nestjs/common';
import { IType } from 'src/type/interface';

@Injectable()
export class TypesService {

  findAll() {
    return [
      { en: 'normal', ja: 'ノーマル'},
      { en: 'fighting', ja: 'かくとう'},
      { en: 'flying', ja: 'ひこう'},
      { en: 'poison', ja: 'どく'},
      { en: 'ground', ja: 'じめん'},
      { en: 'rock', ja: 'いわ'},
      { en: 'bug', ja: 'むし'},
      { en: 'ghost', ja: 'ゴースト'},
      { en: 'steel', ja: 'はがね'},
      { en: 'fire', ja: 'ほのお'},
      { en: 'water', ja: 'みず'},
      { en: 'grass', ja: 'くさ'},
      { en: 'electric', ja: 'でんき'},
      { en: 'psychic', ja: 'エスパー'},
      { en: 'ice', ja: 'こおり'},
      { en: 'dragon', ja: 'ドラゴン'},
      { en: 'dark', ja: 'あく'},
      { en: 'fairy', ja: 'フェアリー'}
    ];
  }

  findOne(id: number): IType {
    const name = this.findAll()[id].ja;
    return { id, name };
  }

}
