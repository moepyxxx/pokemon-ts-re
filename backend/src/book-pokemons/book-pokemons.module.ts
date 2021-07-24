import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { BookPokemonsController } from './book-pokemons.controller';
import { BookPokemonsService } from './book-pokemons.service';

@Module({
  imports: [HttpModule],
  controllers: [BookPokemonsController],
  providers: [BookPokemonsService]
})
export class BookPokemonsModule {}
