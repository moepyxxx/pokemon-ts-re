import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { RootState } from '../../store';
import { updateMyBook } from '../../store/myBookSlice';

import Header from '../../components/common/Header';
import PageTitle from '../../components/common/PageTitle';
import Footer from '../../components/common/Footer';
import DuringSearch from '../../components/search/DuringSearch';
import DetectPokemon from '../../components/search/DetectPokemon';

import API_URL from '../../config/api';
import { ISearchPlace } from '../../interface/searchplace.interface';
import searchPokemon from '../../lib/pokemon/searchPokemon';

type Pokemon = {
  name: string;
  image: string;
  id: number;
}

export default function SearchPage({ place }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [duringSearch, setDuringSearch] = useState<boolean>(true);
  const [pokemon, setPokemon] = useState<Pokemon>(null);

  const dispatch = useDispatch();
  const myBookIds = useSelector((state: RootState) => state.pokemon);

  useEffect(() => {

    searchPokemon(place.pokemonTypeIds)
      .then(res => {
        if (!res.result) return;

        const { name, image, id } = res;
        setPokemon({ name, image, id });
      })
    ;

    setTimeout(() => {
      setDuringSearch(false);
    }, 3000);

  }, []);

  // ゲットするポケモンがセットされたら発火
  useEffect(() => {
    if (!pokemon) return;

    // 重複チェック。すでにゲットしたポケモンは状態管理に追加しない
    const isDuplicated = myBookIds.get.find(id => id === pokemon.id);
    if (isDuplicated) return;

    dispatch(updateMyBook({
      status: 'get',
      id: pokemon.id
    }))

  }, [pokemon]);

  return (
    <>
      <Header />
      <PageTitle title='ポケモンを探す' menu='book' />

      {duringSearch && place ? <DuringSearch place={place} /> : <DetectPokemon pokemon={pokemon} />}

      <Footer />
    </>
  )  
}

export async function getStaticPaths() {
  
  const places: ISearchPlace[] = await( await fetch(`${API_URL}searchplaces/`)).json();

  const paths = [];
  for (let i = 0; i < places.length; i++) {
    const path = { params: { slug: places[i].slug } };
    paths.push(path);
  }

  return {
    paths,
    fallback: true
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  
  const place: ISearchPlace = await( await fetch(`${API_URL}searchplaces/${params.slug}`)).json();

  return {
    props: { place },
    revalidate: 60
  };
}