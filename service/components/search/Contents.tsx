
import styled from 'styled-components';
import PLACES from '../../lib/database/places';
import Panel from './Panel';

const Contents: React.FC = () => {

  return (
    <SearchPlace>
      <Description>どこにいって探してみる？</Description>
      <List>
        {PLACES.map(place => {
          return (<Panel key={place.slug} place={place} />)
        })}
      </List>
  </SearchPlace>
  );
}

export const SearchPlace = styled.section`
  margin: 0 auto 80px;
  width: 100%;
  max-width: 800px;
`;

export const Description = styled.p`
  margin: 0 0 40px;
  font-size: 20px;
  text-align: center;
`;

export const List = styled.div`
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  &:after {
    content: '';
    display: block;
    width: calc(calc(100% - 40px) / 3);
  }
`;

export default Contents;