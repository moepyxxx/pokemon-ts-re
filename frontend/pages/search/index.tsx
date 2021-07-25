import Header from '../../components/common/Header';
import PageTitle from '../../components/common/PageTitle';
import Footer from '../../components/common/Footer';
import SearchContents from '../../components/search/Contents';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import API_URL from '../../config/api';

export default function Search({ places }: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <>
      <Header />
      <PageTitle title='ポケモンを探す' menu='book' />
      <SearchContents places={places} />
      <Footer />
    </>
  )  
}

export const getStaticProps: GetStaticProps = async () => {

  const places = await( await fetch(API_URL + 'searchplaces/')).json();
  return {
    props: {
      places
    },
    revalidate: 60
  };
}