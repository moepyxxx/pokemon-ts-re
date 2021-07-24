import { Module } from '@nestjs/common';
import { SearchplacesController } from './searchplaces.controller';
import { SearchplacesService } from './searchplaces.service';

@Module({
  controllers: [SearchplacesController],
  providers: [SearchplacesService],
})
export class SearchplacesModule {}
