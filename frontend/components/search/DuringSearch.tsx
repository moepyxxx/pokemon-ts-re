
import styled, { keyframes } from 'styled-components';
import { ISearchPlace } from '../../interface/searchplace.interface';

type Props = {
  place: ISearchPlace;
}

const DuringSearch: React.FC<Props> = ({ place }) => {
  return (
    <Search>
      <Icon>{place.icon}</Icon>
      <MainText>{place.text}ではどんなポケモンに出会えるかな？</MainText>
      <SubText>（ポケモンを探し中…そのまま待ってね）</SubText>
    </Search>
  );
}

export const Search = styled.div`
  text-align: center;
  margin-bottom: 120px;
`;

export const Icon = styled.p`
  font-size: 24px;
  margin: 0 0 10px;
`;
export const MainText = styled.p`
  font-size: 18px;
`;

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const SubText = styled.p`
  font-size: 14px;
  animation: ${fade} infinite 1s alternate;
`;

export default DuringSearch;