import Link from 'next/link';
import styled from 'styled-components';
import Ball from '../image/Ball';
import BlackBall from '../image/BlackBall';

type TType = 'normal' | 'black';

type Props = {
  type: TType;
}
const Logo: React.FC<Props> = ({ type = 'normal' }) => {
  return(
    <Link href="/">
      <Section>
        {type === 'normal' ? <Ball /> : <BlackBall />}
        <Text type={type}>ポケモンを探そう</Text>
      </Section>
    </Link>
  )
}

export const Section = styled.h1`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const Text = styled.div<{ type: TType }>`
  margin: 0 0 0 10px;
  font-size: 20px;
  ${({ type }) => {
    switch (type) {
      case 'black':
        return `color: #fff`;
      case 'normal':
        return `color: #000`;
    }
  }};
`; 


export default Logo;