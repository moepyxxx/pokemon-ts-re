import { useState } from 'react';
import { useRouter } from 'next/router';

import Header from '../../components/common/Header';
import PageTitle from '../../components/common/PageTitle';
import Footer from '../../components/common/Footer';
import DuringSearch from '../../components/search/DuringSearch';
import DetectPokemon from '../../components/search/DetectPokemon';

import PLACES from '../../lib/database/places';

export default function SearchPage() {
  const [duringSearch, setDuringSearch] = useState<boolean>(true);
  const router = useRouter();

  const { slug } = router.query;
  const place = PLACES.find(place => place.slug === slug);
    
  return (
    <>
      <Header />
      <PageTitle title='ポケモンを探す' menu='book' />

      {duringSearch ? <DuringSearch place={place} /> : <DetectPokemon />}

      <Footer />
    </>
  )  
}