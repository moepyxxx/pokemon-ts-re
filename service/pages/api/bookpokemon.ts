import type { NextApiRequest, NextApiResponse } from 'next'
import getBookPokemon from '../../lib/pokemon/getBookPokemon';
import { POKEMON_URL } from '../../lib/pokemon/url';
import { BookPokemon } from '../../types/pokemon/BookPokemon';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const limit = req.body.limit ?? 20;
  const offset = req.body.offset ?? 0;

  const fetchIdUrl = `${POKEMON_URL}?limit=${limit}&offset=${offset}`;

  const pokemonIds: string[] = await fetch(fetchIdUrl)
    .then(res => res.json())
    .then(json => json.results.map(json => {
      return json.url.replace(POKEMON_URL, '').replace('/', '');
    }))
  ;
  
  const pokemons: BookPokemon[] = [];

  for (let i = 0; i < pokemonIds.length; i++) {
    const pokemon: BookPokemon = await getBookPokemon(pokemonIds[i]);
    pokemons.push(pokemon);
  }

  res.status(200).json(pokemons);
}

