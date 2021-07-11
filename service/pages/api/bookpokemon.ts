import type { NextApiRequest, NextApiResponse } from 'next'
import getSummaryBookPokemon from '../../lib/pokemon/getSummaryBookPokemon';
import { POKEMON_URL } from '../../lib/pokemon/url';
import { SummaryBookPokemon } from '../../types/pokemon/SummaryBookPokemon';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const limit = req.query.limit ?? 20;
  const offset = req.query.offset ?? 0;

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
    const pokemon: SummaryBookPokemon = await getSummaryBookPokemon(pokemonIds[i]);
    pokemons.push(pokemon);
  }

  res.status(200).json({
    result: pokemons,
    isNext
  });
}

