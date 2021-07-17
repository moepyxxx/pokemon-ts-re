import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useState } from 'react'

import Header from '../../components/common/Header';
import NewsContents from '../../components/news/Contents';
import PageTitle from '../../components/common/PageTitle';
import Footer from '../../components/common/Footer';
import getSummaryNewsList from '../../lib/news/getSummaryNewsList';

export default function News({ news, isNext }: InferGetStaticPropsType<typeof getStaticProps>) {

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


export const getStaticProps: GetStaticProps = async () => {

  const { news, isNext } = await getSummaryNewsList();
  return {
    props: {
      news,
      isNext
    },
    // 60秒ごとに再レンダリング（記事が増える場合があるため）
    revalidate: 60
  };
}
