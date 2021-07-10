import { Type } from './Type';

export type BookPokemon = {
  id: string;
  name: string;
  image: string;
  types: Type[];
}