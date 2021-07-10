import Link from 'next/link'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { BookPokemon } from '../types/pokemon/BookPokemon'

export default function Home({ pokemons }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <section>
      <h1>ポケモン図鑑</h1>
      <ul>
        {pokemons.map(pokemon => {
          const type = pokemon.types.map(type => type.name).join(',');
          return (<li key={pokemon.id}>{pokemon.id}. {pokemon.name} ( {type} ) - {pokemon.image}</li>)
        })}
      </ul>
    </section>
  )  
}

export const getServerSideProps: GetServerSideProps = async () => {
  const pokemons: BookPokemon[] = await fetch ('http://localhost:3000/api/bookpokemon').then(res => res.json());
  return { props: { pokemons } };
}
