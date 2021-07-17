
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store';
import { SummaryBookPokemon } from '../../types/pokemon/SummaryBookPokemon';
import Panel from './Panel';
import UnknownPanel from './UnknownPanel';

type Props = {
  pokemons: SummaryBookPokemon[];
  pager: number;
  next: boolean;
  isUseUnknown: boolean;
  viewMore: () => void;
}

const Contents: React.FC<Props> = ({ pokemons, pager, next, viewMore, isUseUnknown }) => {

  const statuses = useSelector((state: RootState) => state.pokemon);



  return (
    <Section>
      <List>
        {pokemons.map(pokemon => {
          const isEncounter = statuses.encounter.find(status => status === Number(pokemon.id));
          const isGet = statuses.get.find(status => status === Number(pokemon.id));
          if (isEncounter || isGet || isUseUnknown) {
            return (<Panel key={pokemon.id} pokemon={pokemon} />)
          }
          return (<UnknownPanel key={pokemon.id} id={pokemon.id} />)
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

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 60px;
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

export default Contents;