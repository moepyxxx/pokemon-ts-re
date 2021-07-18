import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store';
import { updateMyBook } from '../../store/myBookSlice';

import Header from '../../components/common/Header';
import PageTitle from '../../components/common/PageTitle';
import Footer from '../../components/common/Footer';
import DuringSearch from '../../components/search/DuringSearch';
import DetectPokemon from '../../components/search/DetectPokemon';

import { SearchPlace } from '../../types/search/SearchPlace';
import PLACES from '../../lib/database/places';
import searchPokemon from '../../lib/pokemon/searchPokemon';

type Pokemon = {
  name: string;
  image: string;
  id: number;
}

export default function SearchPage() {
  const [duringSearch, setDuringSearch] = useState<boolean>(true);
  const [place, setPlace] = useState<SearchPlace>(null);
  const [pokemon, setPokemon] = useState<Pokemon>(null);

  const dispatch = useDispatch();
  const myBookIds = useSelector((state: RootState) => state.pokemon);

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {

    // 複数実行されることを防ぐ
    if (!slug) return;

    setPlace(PLACES.find(place => place.slug === slug));

    searchPokemon()
      .then(res => {
        if (!res.result) return;

        const { name, image, id } = res;
        setPokemon({ name, image, id });
      })
    ;

    setTimeout(() => {
      setDuringSearch(false);
    }, 3000);

  }, [slug]);

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