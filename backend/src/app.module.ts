import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookPokemonsController } from './book-pokemons/book-pokemons.controller';
import { BookPokemonsService } from './book-pokemons/book-pokemons.service';
import { SearchplacesController } from './searchplaces/searchplaces.controller';
import { SearchplacesService } from './searchplaces/searchplaces.service';
import { TypesController } from './types/types.controller';
import { TypesService } from './types/types.service';

@Module({
  imports: [],
  controllers: [AppController, BookPokemonsController, SearchplacesController, TypesController],
  providers: [AppService, BookPokemonsService, SearchplacesService, TypesService],
})
export class AppModule {}
