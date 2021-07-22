
import Link from 'next/link';
import styled from 'styled-components';
import Unknown from '../image/Unknown';

type Props = {
  id: string;
}

const UnknownPanel: React.FC<Props> = ({ id }) => {
  return (
    <Link href="/">
      <Section>
        <No>No.{id}</No>
        <Main>
          <Image>
            <Unknown />
          </Image>
          <Name>？？？？？</Name>
          <TypesList>
            <Type>？？？</Type>
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

export const Type = styled.li`
  display: inline-block;
  padding: 0 12px 2px;
  border-radius: 16px;
  font-size: 11px;
  margin: 0 2px;
  background-color: #000;
  color: #fff;
`;

export default UnknownPanel;