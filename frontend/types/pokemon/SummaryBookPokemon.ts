import { Type } from './Type';

export type SummaryBookPokemon = {
  id: string;
  name: string;
  image: string;
  types: Type[];
}