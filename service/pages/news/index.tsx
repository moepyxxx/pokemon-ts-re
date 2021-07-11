import Link from 'next/link'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { useState } from 'react'

export default function News({ news, isNext }: InferGetServerSidePropsType<typeof getServerSideProps>) {

  const [pager,] = useState<number>(1);
  const [next,] = useState<boolean>(isNext);
  const [prev,] = useState<boolean>(false);

  return (
    <section>
      <h1>更新情報</h1>
      <ul>
        {news.map(content => {
          return (<li key={content.id}>{content.published} : {content.title} ( {content.pokemon.title} ) - {content.pokemon.image}</li>)
        })}
      </ul>
      <div className="pager">
        { prev ? <Link href={`/news/${pager - 1}`}>{pager - 1}</Link> : ''}
        <span>{pager}</span>
        { next ? <Link href={`/news/${pager + 1}`}>{pager + 1}</Link> : ''}
      </div>
    </section>
  )  
}

export const getServerSideProps: GetServerSideProps = async () => {

  const { news, isNext } = await fetch (`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/news`).then(res => res.json());
  return {
    props: {
      news,
      isNext
    }
  };
}
