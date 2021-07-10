import type { NextApiRequest, NextApiResponse } from 'next'
import { BookPokemon } from '../../types/pokemon/BookPokemon';

const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon/';
const TYPE_URL = 'https://pokeapi.co/api/v2/type/';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const limit = req.body.limit ?? 20;
  const offset = req.body.offset ?? 0;

  const fetchIdUrl = `${POKEMON_URL}?limit=${limit}&offset=${offset}`;

  const pokemonIds = await fetch(fetchIdUrl)
    .then(res => res.json())
    .then(json => json.results.map(json => {
      return json.url.replace(POKEMON_URL, '').replace('/', '');
    }))
  ;
  
  const result = await getPokemonsById(pokemonIds);

  res.status(200).json(result);
}

const getPokemonsById = async (ids: string[]): Promise<BookPokemon[]> => {

  const pokemons = [];

  for (let i = 0; i < ids.length; i++) {

    const pokemon = await fetch (POKEMON_URL + ids[i])
      .then(res => res.json())
      .then(res => {

        // タイプを取得
        const types = [];
        for (let i = 0; i < res.types.length; i++) {
          const { name } = res.types[i].type;
          const id = res.types[i].type.url.replace(TYPE_URL, '').replace('/', '');
          const type = { name, id };
          types.push(type);
        }

        // 必要なプロパティを取得
        const pokemon: BookPokemon = {
          id: res.id,
          name: res.name,
          image: res.sprites.front_default,
          types
        }

        return pokemon;
      })
    ;
    pokemons.push(pokemon);
  }
  return pokemons;
}
