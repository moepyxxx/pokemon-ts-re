
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { RootState } from '../../store';
import { SummaryBookPokemon } from '../../types/pokemon/SummaryBookPokemon';

import Panel from './Panel';
import UnknownPanel from './UnknownPanel';

type TBookQuery = 'all' | 'get' | 'encounter';

type Props = {
  pokemons: SummaryBookPokemon[];
  pager: number;
  next: boolean;
  viewMore: () => void;
}

const BookContents: React.FC<Props> = ({ pokemons, pager, next, viewMore }) => {

  const myBook = useSelector((state: RootState) => state.pokemon);
  const router = useRouter();
  const { book } = router.query;

  const isAllActive = (book === 'all' || !book);
  const isGetActive = book === 'get';
  const isEncounterActive = book === 'encounter';
  
  const moveTo = (move: TBookQuery) : void => {
    router.push({
      pathname:"/bookpokemon",
      query: { book: move }
    });
  }

  const queryComponent = () => {
    if (book === 'get') {
      return (
        <List>
          
          <p>いないよ</p>
        </List>
      );
    } else {
      return (
        <>
          <List>
            {pokemons.map(pokemon => {
              const isEncounter = myBook.encounter.find(status => status === Number(pokemon.id));
              const isGet = myBook.get.find(status => status === Number(pokemon.id));
              if (isEncounter || isGet) {
                return (<Panel key={pokemon.id} pokemon={pokemon} />)
              }
              return (<UnknownPanel key={pokemon.id} id={pokemon.id} />)
            })}
          </List>

          <Pager>
            { next ? <Button onClick={viewMore}>もっと見る</Button> : ''}
          </Pager>
        </>
      );
    }
  }

  return (
    <Section>

      <FilterLink>
        <FilterLnkList isLink isActive={isAllActive} onClick={() => moveTo('all')}>すべての<br />ずかん</FilterLnkList>
        <FilterLnkList isLink isActive={isGetActive} onClick={() => moveTo('get')}>つかまえた<br />ポケモン</FilterLnkList>
        <FilterLnkList isLink={false} isActive={isEncounterActive} onClick={() => moveTo('encounter')}>みつけた<br />ポケモン</FilterLnkList>
      </FilterLink>

      {queryComponent()}

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
  &:after {
    content: '';
    display: block;
    width: calc(25% - 10px);
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

export default BookContents;