export type ISummaryNews = {
  id: string;
  title: string;
  pokemon: {
    image: string;
    title: string;
  };
  published: Date;
}