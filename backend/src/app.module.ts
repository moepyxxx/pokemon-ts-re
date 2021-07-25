import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookPokemonsModule } from './book-pokemons/book-pokemons.module';
import { ConfigModule } from '@nestjs/config';
import { NewsModule } from './news/news.module';
import { SearchplacesModule } from './searchplaces/searchplaces.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env']
    }),
    BookPokemonsModule,
    NewsModule,
    NewsModule,
    SearchplacesModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
