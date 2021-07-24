import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchplacesController } from './searchplaces/searchplaces.controller';
import { SearchplacesService } from './searchplaces/searchplaces.service';
import { TypesController } from './types/types.controller';
import { TypesService } from './types/types.service';
import { NewsController } from './news/news.controller';
import { NewsService } from './news/news.service';
import { BookPokemonsModule } from './book-pokemons/book-pokemons.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [BookPokemonsModule, HttpModule],
  controllers: [AppController, SearchplacesController, TypesController, NewsController],
  providers: [AppService, SearchplacesService, TypesService, NewsService],
})
export class AppModule {}
