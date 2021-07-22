import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { BookPokemonsService } from './book-pokemons.service';

@Controller('book-pokemons')
export class BookPokemonsController {

  constructor(private BookPokemonsService: BookPokemonsService) {}

  @Get()
  findSummaryAll(@Res() res: Response) {
    res.status(HttpStatus.OK)
      .json(this.BookPokemonsService.findSummaryAll());
  }

  @Get(':id')
  findDetailOne(@Param('id') id: number, @Res() res: Response) {
    res.status(HttpStatus.OK)
      .json(this.BookPokemonsService.findDetailOne(id));
  }
}
