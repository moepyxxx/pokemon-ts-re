import styled from 'styled-components';
import News from '../image/News';
import Book from '../image/Book';

type TMenu = 'book' | 'news';
type Props = {
  title: string;
  menu: TMenu;
}
const PageTitle: React.FC<Props> = ({ title, menu }) => {
  return (
    <Section>
      <Image>
        {menu === 'book' ? <Book /> : <News />}
      </Image>
      <Title>
        {title}
      </Title>
    </Section>
  );
}

export const Section = styled.div`
  text-align: center;
  margin: 60px 0 80px;
`;
export const Image = styled.div`
  width: 100%;
`;
export const Title = styled.h2`
  font-size: 26px;
  margin: 0;
  letter-spacing: 0.1em;
`;




export default PageTitle;