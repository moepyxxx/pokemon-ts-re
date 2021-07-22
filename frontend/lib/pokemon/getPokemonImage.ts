import { POKEMON_URL } from "./url";

/**
 * ポケモン画像を取得
 * @param {string} id 
 * @returns {string} ポケモン画像
 */
 const getPokemonImage = async (id: string): Promise<string> => {
  return await fetch (POKEMON_URL + id)
    .then(res => res.json())
    .then(res => res.sprites.front_default)
  ;
}
export default getPokemonImage;