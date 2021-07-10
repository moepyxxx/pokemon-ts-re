import { POKEMON_SPECIES_URL } from "./url";

/**
 * 日本語のポケモン名を取得
 * @param {string} id 
 * @returns {string} ポケモン名
 */
 const getPokemonName = async (id: string): Promise<string> => {
  return await fetch (POKEMON_SPECIES_URL + id)
    .then(res => res.json())
    .then(res => {
      const ja = res.names.find( _ => _.language.name === 'ja-Hrkt' );
      return  ja.name
    })
  ;
}
export default getPokemonName;