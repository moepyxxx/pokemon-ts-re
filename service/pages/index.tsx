import Link from 'next/link'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { SummaryBookPokemon } from '../types/pokemon/SummaryBookPokemon'
import { useState } from 'react'

export default function Home({ initialPokemons, isNext }: InferGetStaticPropsType<typeof getStaticProps>) {

  const [pager, setPager] = useState<number>(1);
  const [next, setNext] = useState<boolean>(isNext);
  const [pokemons, setPokemons] = useState<SummaryBookPokemon[]>(initialPokemons);

  const more = async () => {
    setPager(pager + 1);
    const { result, isNext } = await fetch (`${process.env.NEXT_PUBLIC_API}bookpokemon/?offset=${pager * 20}&limit=20`).then(res => res.json());
    setPokemons(pokemons.concat(result));
    setNext(isNext);
  }

  return (
    <section>
      <h1>ポケモン図鑑</h1>
      <ul>
        {pokemons.map(pokemon => {
          const type = pokemon.types.map(type => type.name).join(',');
          return (<li key={pokemon.id}>{pokemon.id}. {pokemon.name} ( {type} ) - {pokemon.image}</li>)
        })}
      </ul>
      { next ? <button onClick={more}>もっと見る</button> : ''}
    </section>
  )  
}

export const getStaticProps: GetStaticProps = async () => {

  const { result, isNext } = await fetch (`${process.env.NEXT_PUBLIC_API}bookpokemon`).then(res => res.json());
  return {
    props: {
      initialPokemons: result,
      isNext
    }
  };
}
