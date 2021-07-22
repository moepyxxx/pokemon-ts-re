import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {

  constructor(public NewsService : NewsService) {}

  @Get()
  findAll(@Res() res: Response) {
    res.status(HttpStatus.OK)
      .json(this.NewsService.findAll());
  }

  @Get(':id')
  findOne(@Param('id') id: number, @Res() res: Response) {
    res.status(HttpStatus.OK)
      .json(this.NewsService.findOne(id));
  }
  
}
