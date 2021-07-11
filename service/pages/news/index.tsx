import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { useState } from 'react'

import Header from '../../components/common/Header';
import NewsContents from '../../components/news/Contents';
import PageTitle from '../../components/common/PageTitle';
import Footer from '../../components/common/Footer';

export default function News({ news, isNext }: InferGetServerSidePropsType<typeof getServerSideProps>) {

  const [pager,] = useState<number>(1);
  const [next,] = useState<boolean>(isNext);
  const [prev,] = useState<boolean>(false);

  return (
    <>
      <Header />
      <PageTitle title='更新情報' menu='news' />
      <NewsContents news={news} pager={pager} prev={prev} next={next} />
      <Footer />
    </>
  )  
}


export const getServerSideProps: GetServerSideProps = async () => {

  const { news, isNext } = await fetch (`${process.env.NEXT_PUBLIC_PROTOCOL}${process.env.NEXT_PUBLIC_VERCEL_URL}/api/news`).then(res => res.json());
  return {
    props: {
      news,
      isNext
    }
  };
}
