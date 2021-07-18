import Header from '../../components/common/Header';
import PageTitle from '../../components/common/PageTitle';
import Footer from '../../components/common/Footer';
import SearchContents from '../../components/search/Contents';

export default function Search() {

  return (
    <>
      <Header />
      <PageTitle title='ポケモンを探す' menu='book' />
      <SearchContents />
      <Footer />
    </>
  )  
}