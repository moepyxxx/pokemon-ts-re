import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { NewsService } from './news.service';

export interface IFindSummaryAllParams {
  limit: number;
  offset: number;
}

@Controller('news')
export class NewsController {

  constructor(public NewsService : NewsService) {}

  @Get()
  async findAll(@Res() res: Response, @Param() params: IFindSummaryAllParams): Promise<any> {
    res.status(HttpStatus.OK)
      .json(await this.NewsService.findAll(params));
  }

  @Get(':id')
  findOne(@Param('id') id: number, @Res() res: Response) {
    res.status(HttpStatus.OK)
      .json(this.NewsService.findOne(id));
  }
  
}
