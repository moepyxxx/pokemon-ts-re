
import styled from 'styled-components';
import { SummaryBookPokemon } from '../../types/pokemon/SummaryBookPokemon';
import Panel from './Panel';

type Props = {
  pokemons: SummaryBookPokemon[];
  pager: number;
  next: boolean;
  viewMore: () => void;
}

const Contents: React.FC<Props> = ({ pokemons, pager, next, viewMore }) => {
  return (
    <Section>
      <List>
        {pokemons.map(pokemon => {
          return (<Panel key={pokemon.id} pokemon={pokemon} />)
        })}
      </List>

      <Pager>
        { next ? <button onClick={viewMore}>もっと見る</button> : ''}
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

export default Contents;