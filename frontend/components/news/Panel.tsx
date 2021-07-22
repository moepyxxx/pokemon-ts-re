
import Link from 'next/link';
import styled from 'styled-components';
import { SummaryNews } from '../../types/news/SummaryNews';

type Props = {
  news: SummaryNews;
}

const Panel: React.FC<Props> = ({ news }) => {
  return (
    <Link href="/">
      <Section>
        <Date>{news.published}</Date>
        <Image>
          <img src={process.env.NEXT_PUBLIC_IMAGE_PROTOCOL + news.pokemon.image} alt={news.pokemon.title} width='50' />
        </Image>
        <Title>{news.title}</Title>
      </Section>
    </Link>
  );
}

export const Section = styled.div`
  width: 100%;
  padding: 10px 50px 10px 20px;
  background-color: #fff;
  margin-bottom: 24px;
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  justify-content: left;
  border: #D9D9D9 solid 1px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border-right: 2px solid #E6001A;
    border-bottom: 2px solid #E6001A;
    transform: rotate(-45deg);
    right: 20px;
  }
`;
export const Image = styled.span`
  display: inline-block;
  padding: 0 8px;
`;
export const Title = styled.p`
  margin: 0;
`;
export const Date = styled.span`
`;

export default Panel;