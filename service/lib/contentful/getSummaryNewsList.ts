import { Entry } from "contentful";
import { SummaryNews } from "../../types/news/SummaryNews";

import client from './client';
import formatSummaryNews from "./formatSummaryNews";

const MAX_ENTRIES = 20;

const getSummaryNewsList = async (limit: number = MAX_ENTRIES, offset: number = 0) => {
  
  let isNext: boolean = true;
  
  const results: Entry<any>[] = await client.getEntries({
    content_type: 'blogPost',
    limit,
    skip: offset
  })
    .then(res => {
      isNext = res.total === limit ? true : false;
      return res.items;
    })
  ;
  
  if (!results) {
    return { message: '記事は見つかりませんでした' };
  }

  const news: SummaryNews[] = formatSummaryNews(results);

  return {
    message: '記事が見つかりました',
    news: news,
    isNext
  };
}
export default getSummaryNewsList;