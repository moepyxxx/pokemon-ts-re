import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { SearchplacesService } from './searchplaces.service';

@Controller('searchplaces')
export class SearchplacesController {
  
  constructor(private SearchplacesService: SearchplacesService) {}

  @Get()
  findAll(@Res() res: Response) {
    res.status(HttpStatus.OK)
      .json(this.SearchplacesService.findAll())
  }

  @Get(':slug')
  findOne(@Param('slug') slug : string, @Res() res: Response) {
    res.status(HttpStatus.OK)
      .json(this.SearchplacesService.findOne(slug));
  }
}
