
import styled from 'styled-components';
import { SummaryBookPokemon } from '../../types/pokemon/SummaryBookPokemon';
import Panel from './Panel';

type Props = {
  pokemons: SummaryBookPokemon[];
  pager: number;
  next: boolean;
  viewMore: () => void;
}

const AllBookContents: React.FC<Props> = ({ pokemons, pager, next, viewMore }) => {

  return (
    <Section>
      <List>
        {pokemons.map(pokemon => {
          return (<Panel key={pokemon.id} pokemon={pokemon} />)
        })}
      </List>

      <Pager>
        { next ? <Button onClick={viewMore}>もっと見る</Button> : ''}
      </Pager>
    </Section>
  );
}

export const Section = styled.section`
  margin: 0 auto 80px;
  width: 100%;
  max-width: 800px;
`;

export const FilterLink = styled.div`
  margin: 0 auto 80px;
  max-width: 500px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FilterLnkList = styled.button<{ isActive: boolean, isLink: boolean }>`
  border: none;
  background-color: transparent;
  line-height: 2;
  font-size: 16px;
  cursor: pointer;
  ${({ isLink }) => {
    if (isLink) return;
    return `
      text-decoration: line-through;
      pointer-events: none;
    `;
  }}
  ${({ isActive }) => {
    if (!isActive) return;
    return `
      position: relative;
      &:after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #000;
        width: 20px;
        height: 2px;
    `;
  }}
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 60px;
  &:after, &:before {
    content: '';
    display: block;
    width: calc(25% - 10px);
  }
  &:before {
    order: 1;
  }
`;

export const Pager = styled.div`
  text-align: center;
`;
export const Button = styled.button`
  color: #fff;
  background-color: #E6001A;
  width: 300px;
  padding: 12px 12px 14px;
  border: none;
  font-size: 18px;
  position: relative;
  cursor: pointer;
  &::after {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transform: rotate(-45deg) translateY(-50%);
    right: 16px;
    top: 50%;
  }
`;

export default AllBookContents;