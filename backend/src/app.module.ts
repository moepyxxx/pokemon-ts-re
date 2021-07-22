import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookPokemonsController } from './book-pokemons/book-pokemons.controller';
import { BookPokemonsService } from './book-pokemons/book-pokemons.service';

@Module({
  imports: [],
  controllers: [AppController, BookPokemonsController],
  providers: [AppService, BookPokemonsService],
})
export class AppModule {}
