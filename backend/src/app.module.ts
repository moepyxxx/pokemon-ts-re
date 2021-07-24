import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchplacesController } from './searchplaces/searchplaces.controller';
import { SearchplacesService } from './searchplaces/searchplaces.service';
import { TypesController } from './types/types.controller';
import { TypesService } from './types/types.service';
import { BookPokemonsModule } from './book-pokemons/book-pokemons.module';
import { ConfigModule } from '@nestjs/config';
import { NewsModule } from './news/news.module';

@Module({
  imports: [BookPokemonsModule, NewsModule, ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: ['.env']
  }), NewsModule],
  controllers: [AppController, SearchplacesController, TypesController],
  providers: [AppService, SearchplacesService, TypesService],
})
export class AppModule {}
