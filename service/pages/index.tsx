import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { useState } from 'react'

import { SummaryBookPokemon } from '../types/pokemon/SummaryBookPokemon'

import Header from '../components/common/Header';
import PageTitle from '../components/common/PageTitle';
import BookPokemonContents from '../components/bookpokemon/Contents';

export default function Home({ initialPokemons, isNext }: InferGetServerSidePropsType<typeof getServerSideProps>) {

  const [pager, setPager] = useState<number>(1);
  const [next, setNext] = useState<boolean>(isNext);
  const [pokemons, setPokemons] = useState<SummaryBookPokemon[]>(initialPokemons);

  const more = async () => {
    setPager(pager + 1);
    const { result, isNext } = await fetch (`${process.env.NEXT_PUBLIC_PROTOCOL}${process.env.NEXT_PUBLIC_VERCEL_URL}/api/bookpokemon/?offset=${pager * 20}&limit=20`).then(res => res.json());
    setPokemons(pokemons.concat(result));
    setNext(isNext);
  }

  return (
    <>
      <Header />
      <PageTitle title='ポケモン図鑑そうごう' menu='book' />
      <BookPokemonContents next={next} pokemons={pokemons} pager={pager} viewMore={more}  />
    </>
  )  
}

export const getServerSideProps: GetServerSideProps = async () => {

  const { result, isNext } = await fetch (`${process.env.NEXT_PUBLIC_PROTOCOL}${process.env.NEXT_PUBLIC_VERCEL_URL}/api/bookpokemon`).then(res => res.json());
  return {
    props: {
      initialPokemons: result,
      isNext
    }
  };
}
