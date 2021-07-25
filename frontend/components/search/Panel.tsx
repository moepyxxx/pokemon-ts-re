
import Link from 'next/link';
import styled from 'styled-components';
import { ISearchPlace } from '../../interface/searchplace.interface';

type Props = {
  place: ISearchPlace;
}

const Panel: React.FC<Props> = ({ place }) => {
  return (
    <Link href={`/search/${place.slug}`} passHref>
      <SearchLink>{place.text}へ{place.icon}</SearchLink>
    </Link>
  );
}

export const SearchLink = styled.div`
  width: calc(calc(100% - 40px) / 3);
  background-color: #fff;
  margin-bottom: 20px;
  padding: 20px 0;
  border: 1px solid #000;
  cursor: pointer;
  position: relative;
  transition: .5s all;
  &:after {
    content: '';
    position: absolute;
    width: 95%;
    height: 83%;
    border: 2px solid #000;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:hover {
    box-shadow: 0 4px 4px rgba(0, 0, 0, .2);
  }
`;

export default Panel;