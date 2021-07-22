import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookPokemonsController } from './book-pokemons/book-pokemons.controller';

@Module({
  imports: [],
  controllers: [AppController, BookPokemonsController],
  providers: [AppService],
})
export class AppModule {}
