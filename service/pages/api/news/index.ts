import { Entry } from "contentful";
import { NextApiRequest, NextApiResponse } from "next";
import { SummaryNews } from "../../../types/news/SummaryNews";

import client from '../../../lib/contentful/client';
import getSummaryNews from "../../../lib/contentful/getSummaryNews";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  
  const results: Entry<any>[] = await client.getEntries({
    content_type: 'blogPost'
  })
    .then(res => res.items)
  ;
  
  if (!results) {
    res.status(404).json({ message: '記事は見つかりませんでした' });
  }

  const news: SummaryNews[] = getSummaryNews(results);

  res.status(200).json(news);
}