import Link from 'next/link'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { BookPokemon } from '../types/pokemon/BookPokemon'
import { useState } from 'react'

export default function Home({ initialPokemons, isNext }: InferGetServerSidePropsType<typeof getServerSideProps>) {

  const [pager, setPager] = useState<number>(1);
  const [next, setNext] = useState<boolean>(isNext);
  const [pokemons, setPokemons] = useState<BookPokemon[]>(initialPokemons);

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

export const getServerSideProps: GetServerSideProps = async () => {

  const { result, isNext } = await fetch (`${process.env.NEXT_PUBLIC_API}bookpokemon`).then(res => res.json());
  return {
    props: {
      initialPokemons: result,
      isNext
    }
  };
}
