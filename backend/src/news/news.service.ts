import { Injectable } from '@nestjs/common';
import { INews, ISummaryNews } from './interface';

@Injectable()
export class NewsService {
  
  findAll(): ISummaryNews[] {
    return [{
      id: 1,
      title: 'title string',
      pokemon: 'pokemon string',
      published: new Date()
    }, {
      id: 2,
      title: 'title string 2',
      pokemon: 'pokemon string 2',
      published: new Date()
    }]
  }

  findOne(id: number): INews {
    return {
      id,
      title: 'title string',
      pokemon: 'pokemon string',
      comment: 'comment string',
      published: new Date()
    }
  }
}
