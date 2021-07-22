import { Type } from "../../types/pokemon/Type";
import TYPE_NAME from "../database/typeName";
import { POKEMON_URL, TYPE_URL } from "./url";

/**
 * ポケモンタイプを取得
 * @param {string} id 
 * @returns {Type[]} ポケモンタイプ
 */
 const getPokemonTypes = async (id: string): Promise<Type[]> => {
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
    const typeIndex = ids[i] - 1;
    const name = TYPE_NAME[typeIndex].ja;
    types.push({
      name,
      id: Number(ids[i])
    })
  }
  return types;
}
export default getPokemonTypes;