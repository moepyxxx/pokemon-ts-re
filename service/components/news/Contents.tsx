
import Link from 'next/link';
import styled from 'styled-components';
import { SummaryNews } from '../../types/news/SummaryNews';
import Panel from './Panel';

type Props = {
  news: SummaryNews[];
  pager: number;
  prev: boolean;
  next: boolean;
}

const Contents: React.FC<Props> = ({ news, pager, prev, next }) => {
  return (
    <Section>
      <List>
        {news.map(content => {
          return (<Panel key={content.id} news={content} />)
        })}
      </List>

      <Pager>
        { prev ? <PageLink><Link href={`/news/${pager - 1}`}>{pager - 1}</Link></PageLink> : ''}
        <Current>{pager}</Current>
        { next ? <PageLink><Link href={`/news/${pager + 1}`}>{pager + 1}</Link></PageLink> : ''}
      </Pager>

    </Section>
  );
}

export const Section = styled.section`
  margin: 0 auto 80px;
  width: 100%;
  max-width: 800px;
`;
export const List = styled.div`
  margin: 0 auto 60px;
`;
export const Pager = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  justify-content: center;
`;
export const Current = styled.span`
  display: inline-block;
  border: 2px solid #E6001A;
  color: #E6001A;
  background-color: #E6001A;
  color: #fff;
  font-size: 18px;
  padding: 4px 16px;
  margin: 0 8px;
`;
export const PageLink = styled.span`
  display: inline-block;
  border: 2px solid #E6001A;
  color: #E6001A;
  background-color: #fff;
  font-size: 18px;
  padding: 4px 16px;
`;

export default Contents;