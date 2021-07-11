import Link from 'next/link';
import styled from 'styled-components';
import Ball from './image/Ball';

const Logo = () => {
  return(
    <Link href="/">
      <Section>
        <Ball />
        <Text>ポケモンを探そう</Text>
      </Section>
    </Link>
  )
}

export const Section = styled.h1`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const Text = styled.div`
  margin: 0 0 0 10px;
  font-size: 20px;
`; 


export default Logo;