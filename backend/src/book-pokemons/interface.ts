export interface IBookPokemon {
  id: number;
  name: string;
  image: string;
  type: IType[];
  abilities: IAbilities;
  height: number;
  weight: number;
  species: string;
}

export interface ISummaryBookPokemon {
  id?: number;
  name?: string;
  image?: string;
  types?: IType[];
}

interface IAbilities {
  name: string;
  description: string;
}

export interface IType {
  id: number;
  name: string;
}