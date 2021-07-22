import MAX_POKEMON from '../database/maxPokemon';
import TYPE_NAME from '../database/typeName';
import { POKEMON_URL } from './url';
import getPokemonImage from './getPokemonImage';
import getPokemonName from './getPokemonName';

type Result = {
  result: boolean;
  name?: string;
  image?: string;
  id?: number;
}

const searchPokemon = async (ids: number[]) : Promise<Result> => {

  let isSet = false;
  let randomId;
  let fixedId;
  do {
    randomId = 1 + Math.floor( Math.random() * MAX_POKEMON );
    fixedId = await fetch (POKEMON_URL + randomId)

      .then(res => res.json())
      .then(res => {

        // 表示させたポケモンのタイプ名を取得
        const typeNames: string[] = res.types.map(types => {
          return types.type.name;
        });

        // ポケモンのタイプがその場所に出現するポケモンのタイプと合致したら結果を返却する
        const result = typeNames.some(name => {

          let isFixed = false;
          for (let i = 0; i < ids.length; i++) {
            if (TYPE_NAME[ids[i]].en === name) {
              isFixed = true;
              break;
            }
          }
          return isFixed;
        });

        // 結果がtrueならdo..whileのループを抜ける
        if (result) {
          isSet = true;
        }

        // 決まったポケモンのIDをかえす
        return res.id;
      })
    ;
  } while (isSet === false);

  const name = await getPokemonName(fixedId);
  const image = await getPokemonImage(fixedId);

  if (!name || !image) return { result: false };

  return {
    result: true,
    name,
    image,
    id: fixedId
  };
}
export default searchPokemon;