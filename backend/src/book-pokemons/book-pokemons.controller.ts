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

    const limit = params.limit ?? 20;
    const offset = params.offset ?? 0;

    const observableLists: Observable<any>[] = [];

    observableLists.push(this.BookPokemonsService.checkIsNext(params));
    
    const ids = [...Array(limit).keys()].map(i => i + 1 + offset);
    for (let i = 0; i < ids.length; i++) {
      observableLists.push(this.BookPokemonsService.getPokemonTypesIds(ids[i]))
      observableLists.push(this.BookPokemonsService.getPokemonName(ids[i]))
      observableLists.push(this.BookPokemonsService.getPokemonImage(ids[i]))
    }

    forkJoin(observableLists).subscribe(() => {
      res.status(HttpStatus.OK)
        .json({
          bookPokemons: this.BookPokemonsService.hoge,
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
