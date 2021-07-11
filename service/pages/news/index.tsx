import Link from 'next/link'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useState } from 'react'

export default function News({ news, isNext }: InferGetStaticPropsType<typeof getStaticProps>) {

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

export const getStaticProps: GetStaticProps = async () => {

  const { news, isNext } = await fetch (`${process.env.NEXT_PUBLIC_API}news`).then(res => res.json());
  return {
    props: {
      news,
      isNext
    }
  };
}
