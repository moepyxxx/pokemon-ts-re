import { Injectable } from '@nestjs/common';
import { INews, ISummaryNews } from './interface';
import { IFindSummaryAllParams } from './news.controller';
import { Entry } from 'contentful';
import { ConfigService } from '@nestjs/config'
import * as contentful from 'contentful'

interface IFindAll {
  message: string;
  news?: ISummaryNews[];
  isNext?: boolean;
}


@Injectable()
export class NewsService {

  private client;

  constructor(private readonly config: ConfigService) {
    this.client = contentful.createClient({
      space: this.config.get('CONTENTFUL_SPACE'),
      environment: this.config.get('CONTENTFUL_ENV'),
      accessToken: this.config.get('CONTENTFUL_TOKEN')
    });
  }
  
  async findAll(params: IFindSummaryAllParams): Promise<IFindAll> {

    const limit = params.limit ?? 20;
    const offset = params.offset ?? 0;

    let isNext: boolean = true;
  
    const results: Entry<any>[] = await this.client.getEntries({
      content_type: 'blogPost',
      limit,
      skip: offset
    })
      .then(res => {
        console.log(res);
        isNext = res.total === limit ? true : false;
        return res.items;
      })
    ;
    
    if (!results) {
      return { message: '記事は見つかりませんでした' };
    }
  
    const news: ISummaryNews[] = this.formatSummaryNews(results);
  
    return {
      message: '記事が見つかりました',
      news: news,
      isNext
    };
  }
  
  formatSummaryNews = (assets: Entry<any>[]): ISummaryNews[] => {
    const news: ISummaryNews[] = [];

    for (let i = 0; i < assets.length; i++) {
      const field = assets[i].fields;
      news.push({
        id: field.id,
        title: field.title,
        pokemon: {
          image: field.pokemon.fields.file.url,
          title: field.pokemon.fields.description || null
        },
        published: field.published
      })
    }

    return news;
  }

  // モック
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