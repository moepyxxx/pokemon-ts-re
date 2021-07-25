
import styled from 'styled-components';
import Panel from './Panel';
import { ISearchPlace } from '../../interface/searchplace.interface';

type Props = {
  places: ISearchPlace[];
}
const Contents: React.FC<Props> = ({ places }) => {

  return (
    <SearchPlace>
      <Description>どこにいって探してみる？</Description>
      <List>
        {places.map(place => {
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