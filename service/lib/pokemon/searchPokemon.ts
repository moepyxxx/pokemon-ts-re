import MAX_POKEMON from '../database/maxPokemon';
import getPokemonImage from './getPokemonImage';
import getPokemonName from './getPokemonName';

type Result = {
  result: boolean;
  name?: string;
  image?: string;
  id?: number;
}

const searchPokemon = async () : Promise<Result> => {
  const id = 1 + Math.floor( Math.random() * MAX_POKEMON );
  
  const name = await getPokemonName(id.toString());
  const image = await getPokemonImage(id.toString());

  if (!name || !image) return { result: false };

  return {
    result: true,
    name,
    image,
    id
  };
}
export default searchPokemon;