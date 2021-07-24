export interface ISummaryNews {
  id: number;
  title: string;
  pokemon: {
    image: string;
    title: string;
  };
  published: Date;
}

export interface INews {
  id: number;
  title: string;
  pokemon: string;
  comment: string;
  published: Date;
}