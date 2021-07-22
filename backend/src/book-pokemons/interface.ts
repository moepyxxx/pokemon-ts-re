import { IType } from 'src/type/interface';

export interface IBookPokemons {
  id: number;
  name: string;
  image: string;
  type: IType[];
  abilities: IAbilities;
  height: number;
  weight: number;
  species: string;
}

export interface ISummaryBookPokemons {
  id: number;
  name: string;
  image: string;
  type: IType[];
}

interface IAbilities {
  name: string;
  description: string;
}
