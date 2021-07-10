import { Type } from "../../types/pokemon/Type";
import getTypeName from "./getTypeName";
import { POKEMON_URL, TYPE_URL } from "./url";

/**
 * ポケモンタイプを取得
 * @param {string} id 
 * @returns {Type[]} ポケモンタイプ
 */
 const getPokemonType = async (id: string): Promise<Type[]> => {
  const ids = await fetch (POKEMON_URL + id)
    .then(res => res.json())
    .then(res => {
      const ids = [];
      for (let i = 0; i < res.types.length; i++) {
        const id = res.types[i].type.url.replace(TYPE_URL, '').replace('/', '');
        ids.push(id);
      }
      return ids;
    });
  ;

  const types: Type[] = [];
  for (let i = 0; i < ids.length; i++) {
    const name = await getTypeName(ids[i]);
    types.push({
      name,
      id: Number(id)
    })
  }
  return types;
}
export default getPokemonType;