import { Entry } from "contentful";
import { SummaryNews } from "../../types/news/SummaryNews";

const getSummaryNews = (assets: Entry<any>[]): SummaryNews[] => {
  const news: SummaryNews[] = [];

  for (let i = 0; i < assets.length; i++) {
    const field = assets[i].fields;
    news.push({
      id: field.id,
      title: field.title,
      pokemon: {
        image: field.pokemon.fields.file.url,
        title: field.pokemon.fields.description,
      },
      published: field.published
    })
  }

  return news;
}
export default getSummaryNews;