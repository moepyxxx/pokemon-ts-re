import Link from 'next/link'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { BookPokemon } from '../types/pokemon/BookPokemon'
import { useState } from 'react'

export default function Home({ pokemons }: InferGetServerSidePropsType<typeof getServerSideProps>) {

  const [pager, setPager] = useState<number>(1);

  const more = async () => {
    setPager(pager + 1);
    const result = await fetch (`http://localhost:3000/api/bookpokemon/?offset=${pager * 20}&limit=20`).then(res => res.json());
    console.log(result);
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
      <button onClick={more}>もっと見る</button>
    </section>
  )  
}

export const getServerSideProps: GetServerSideProps = async () => {
  const pokemons: BookPokemon[] = await fetch ('http://localhost:3000/api/bookpokemon').then(res => res.json());
  return { props: { pokemons } };
}
