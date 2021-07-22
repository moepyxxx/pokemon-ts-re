
import Link from 'next/link';
import styled from 'styled-components';

type Props = {
  pokemon: {
    name: string;
    image: string;
  }
}
const DetectPokemon: React.FC<Props> = ({ pokemon }) => {

  if (!pokemon) return <></>;
  
  return (
    <Detect>
      <MainText>あ、{pokemon.name}だ！ ゲットできたよ</MainText>
      <SubText>（ずかんに登録されるよ）</SubText>
      <Image>
        <img src={pokemon.image} alt={pokemon.name} width='80' height='80' />
      </Image>

      <NextLink>
        <Link href="/search" passHref>
          <UnderLine>もう一度探す</UnderLine>
        </Link>
        <Link href="/bookpokemon?book=get" passHref>
          <UnderLine>ゲットしたポケモンをみる</UnderLine>
        </Link>
      </NextLink>
      
    </Detect>
  );
}

export const Detect = styled.div`
  text-align: center;
  margin-bottom: 120px;
`;

export const MainText = styled.p`
  font-size: 18px;
`;

export const SubText = styled.p`
  font-size: 14px;
`;

export const Image = styled.span`
  font-size: 24px;
  margin: 0 0 10px;
  display: block;
`;

export const NextLink = styled.div`
  display: inline-block;
`;
export const UnderLine = styled('a')`
  text-decoration: underline;
  margin: 0 10px;
`;

export default DetectPokemon;