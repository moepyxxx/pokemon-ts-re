import { HttpService } from '@nestjs/axios';
import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { forkJoin, Observable } from 'rxjs';
import { BookPokemonsService } from './book-pokemons.service';

export interface IFindSummaryAllParams {
  limit: number;
  offset: number;
}

@Controller('book-pokemons')
export class BookPokemonsController {

  constructor(private BookPokemonsService: BookPokemonsService, private httpService: HttpService) {}

  @Get()
  findSummaryAll(@Param() params: IFindSummaryAllParams, @Res() res: Response) {

    // [note]: 今はコントローラーに書く方法でしか実現できないが将来的にはロジックはServiceへ移動したい
    const limit = params.limit ?? 20;
    const offset = params.offset ?? 0;

    // 対応する非同期処理のリストを作成
    const observableLists: Observable<any>[] = [];

    // isNextを取得
    observableLists.push(this.BookPokemonsService.checkIsNext(params));

    // bookPokemonsを取得
    const ids = [...Array(limit).keys()].map(i => i + 1 + offset);
    for (let i = 0; i < ids.length; i++) {
      observableLists.push(this.BookPokemonsService.getPokemonTypesIds(ids[i]))
      observableLists.push(this.BookPokemonsService.getPokemonName(ids[i]))
      observableLists.push(this.BookPokemonsService.getPokemonImage(ids[i]))
    }

    // すべての処理が完了したら返すようにforkJoinを使う
    forkJoin(observableLists).subscribe(() => {
      res.status(HttpStatus.OK)
        .json({
          bookPokemons: this.BookPokemonsService.bookPokemons,
          isNext: this.BookPokemonsService.isNext
        });
    });
  }

  @Get(':id')
  findDetailOne(@Param('id') id: number, @Res() res: Response) {
    res.status(HttpStatus.OK)
      .json(this.BookPokemonsService.findDetailOne(id));
  }
}
