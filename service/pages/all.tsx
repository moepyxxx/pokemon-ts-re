import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useState } from 'react'
import { SummaryBookPokemon } from '../types/pokemon/SummaryBookPokemon'

import Header from '../components/common/Header';
import PageTitle from '../components/common/PageTitle';
import BookPokemonContents from '../components/bookpokemon/Contents';
import Footer from '../components/common/Footer';
import getSummaryBookPokemonList from '../lib/pokemon/getSummaryBookPokemonList';

export default function All({ initialPokemons, isNext }: InferGetStaticPropsType<typeof getStaticProps>) {

  const [pager, setPager] = useState<number>(1);
  const [next, setNext] = useState<boolean>(isNext);
  const [pokemons, setPokemons] = useState<SummaryBookPokemon[]>(initialPokemons);

  const more = async () => {
    setPager(pager + 1);
    const { result, isNext } = await getSummaryBookPokemonList(pager * 20, 20);
    setPokemons(pokemons.concat(result));
    setNext(isNext);
  }

  return (
    <>
      <Header />
      <PageTitle title='ポケモン図鑑そうごう' menu='book' />
      <BookPokemonContents next={next} pokemons={pokemons} pager={pager} viewMore={more}  />
      <Footer />
    </>
  )  
}

export const getStaticProps: GetStaticProps = async () => {

  const { result, isNext } = await getSummaryBookPokemonList();
  return {
    props: {
      initialPokemons: result,
      isNext
    }
  };
}
