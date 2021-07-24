import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IBookPokemon, ISummaryBookPokemon } from './interface';
import { IType } from 'src/type/interface';
import { IFindSummaryAllParams } from './book-pokemons.controller';

import { DEFAULT_POKEMON_URL, POKEMON_SPECIES_URL, TYPE_URL } from './sources/url';
import TYPE_NAME from './sources/typeName';

@Injectable()
export class BookPokemonsService {

  public isNext: boolean;
  public bookPokemons: ISummaryBookPokemon[] = [];
  
  constructor(private httpService: HttpService) {
    for (let i = 0; i < 20 ;i++) {
      this.bookPokemons.push({})
    }
  }

  checkIsNext(param: IFindSummaryAllParams): Observable<boolean> {

    const limit = param.limit ?? 20;
    const offset = param.offset ?? 0;
    const getPokemonUrl = `${DEFAULT_POKEMON_URL}?limit=${limit}&offset=${offset}`;

    return this.httpService.get(getPokemonUrl)
      .pipe(map(res => {
        this.isNext = res.data.next ? true : false;
        return res.data.next;
      }))
    ;
  }

  getTypes(id: number) : Observable<any> {
    return this.httpService.get(DEFAULT_POKEMON_URL + id)
      .pipe(map(res => {
        const names: IType[] = [];
        for (let i = 0; i < res.data.types.length; i++) {
          const id = res.data.types[i].type.url.replace(TYPE_URL, '').replace('/', '');
          const name = TYPE_NAME[Number(id) - 1].ja;
          names.push({ id, name });
        }
        this.bookPokemons[id - 1].types = names;
      }))
    ;
  }

  getName(id: number): Observable<any> {
    return this.httpService.get(POKEMON_SPECIES_URL + id)
      .pipe(map(res => {
        const ja = res.data.names.find( _ => _.language.name === 'ja-Hrkt' );
        this.bookPokemons[id - 1].name = ja.name;
      }))
    ;
  }

  getImage(id: number): Observable<any> {
    return this.httpService.get(DEFAULT_POKEMON_URL + id)
      .pipe(map(res => {
        const image = res.data.sprites.front_default;
        this.bookPokemons[id - 1].image = image;
      }))
    ;    
  }

  // モック
  findDetailOne(id: number): IBookPokemon {
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
