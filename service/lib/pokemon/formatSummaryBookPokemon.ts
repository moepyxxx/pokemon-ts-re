import { SummaryBookPokemon } from "../../types/pokemon/SummaryBookPokemon";
import getPokemonImage from "./getPokemonImage";
import getPokemonName from "./getPokemonName";
import getPokemonType from "./getPokemonType";

/**
 * 日本語のポケモン名を取得
 * @param {string} id 
 * @returns {SummaryBookPokemon} pokemon
 */
const formatSummaryBookPokemon = async (id: string): Promise<SummaryBookPokemon> => {

  const name = await getPokemonName(id);
  const image = await getPokemonImage(id);
  const types = await getPokemonType(id);

  return Object.assign({
    id,
    image,
    name,
    types
  });
}
export default formatSummaryBookPokemon;