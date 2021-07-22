import formatSummaryBookPokemon from './formatSummaryBookPokemon';
import { POKEMON_URL } from './url';
import { SummaryBookPokemon } from '../../types/pokemon/SummaryBookPokemon';

/**
 * レンダリング用のポケモンリストを取得
 * @param {number} limit 
 * @param {number} offset 
 * @returns {string} ポケモン名
 */
const getSummaryBookPokemonList = async (limit = 20, offset = 0) => {

  const fetchIdUrl = `${POKEMON_URL}?limit=${limit}&offset=${offset}`;

  let isNext: boolean;

  const pokemonIds: string[] = await fetch(fetchIdUrl)
    .then(res => res.json())
    .then(json => {
      isNext = json.next ? true : false;
      return json.results.map(json => 
        json.url.replace(POKEMON_URL, '').replace('/', ''))
    })
  ;
  
  const pokemons: SummaryBookPokemon[] = [];

  for (let i = 0; i < pokemonIds.length; i++) {
    const pokemon: SummaryBookPokemon = await formatSummaryBookPokemon(pokemonIds[i]);
    pokemons.push(pokemon);
  }

  return {
    result: pokemons,
    isNext
  };
}
export default getSummaryBookPokemonList;