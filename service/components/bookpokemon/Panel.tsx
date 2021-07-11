
import Link from 'next/link';
import styled from 'styled-components';
import { SummaryBookPokemon } from '../../types/pokemon/SummaryBookPokemon';

type Props = {
  pokemon: SummaryBookPokemon;
}

const Panel: React.FC<Props> = ({ pokemon }) => {
  return (
    <Link href="/">
      <Section>
        <No>No.{pokemon.id}</No>
        <Main>
          <Image>
            <img src={pokemon.image} alt={pokemon.name} width='80' />
          </Image>
          <Name>{pokemon.name}</Name>
          <TypesList>
            {pokemon.types.map(type => {
              return ( <Type key={type.id} type={type.id}>{type.name}</Type>);
            })}
          </TypesList>
        </Main>
      </Section>
    </Link>
  );
}

export const Section = styled.div`
  width: calc(25% - 10px);
  box-sizing: border-box;
  padding: 4px 16px;
  background-color: #fff;
  margin-bottom: 24px;
  border: #D9D9D9 solid 1px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    border-right: 2px solid #E6001A;
    border-bottom: 2px solid #E6001A;
    transform: rotate(-45deg);
    right: 10px;
    bottom: 10px;
  }
`;

export const No = styled.p`
  margin: 0;
`;
export const Main = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;
export const Image = styled.div`
`;
export const Name = styled.p`
  margin: -10px 0 0;
`;
export const TypesList = styled.ul`
  text-align: center;
  margin: 0;
  padding: 0;
`;

export const Type = styled.li<{ type: number }>`
  display: inline-block;
  padding: 0 12px 2px;
  border-radius: 16px;
  font-size: 11px;
  margin: 0 2px;
  ${({ type }) => {
    switch (type) {
      case 1:
        return `background-color: #f5f5f5;`;
      case 2:
        return `background-color: #ffe4c4;`;
      case 3:
        return `background-color: #b0c4de;`;
      case 4:
        return `background-color: #800080; color: #fff;`;
      case 5:
        return `background-color: #cd853f; color: #fff;`;
      case 6:
        return `background-color: #8b4513; color: #fff;`;
      case 7:
        return `background-color: #bdb76b;`;
      case 8:
        return `background-color: #9370db;`;
      case 9:
        return `background-color: #a9a9a9;`;
      case 10:
        return `background-color: #ff4500; color: #fff;`;
      case 11:
        return `background-color: #1e90ff; color: #fff;`;
      case 12:
        return `background-color: #32cd32;`;
      case 13:
        return `background-color: #ffff00;`;
      case 14:
        return `background-color: #ffc0cb;`;
      case 15:
        return `background-color: #afeeee;`;
      case 16:
        return `background-color: #8b0000; color: #fff;`;
      case 17:
        return `background-color: #4e454a; color: #fff;`;
      case 18:
        return `background-color: #ffe4e1;`;
      default:
        return `background-color: #f5f5f5;`;
    }
  }}
`;

export default Panel;