import Link from "next/link"
import Logo from "./Logo";
import styled from 'styled-components';

const Footer = () => {
  return(
    <FooterSection>
      <Intro>
        <Logo type="black" />
        <Text>
          https://github.com/moepyxxx/pokemon-ts-re/
        </Text>
        <Link href="/all" passHref><MarginLeft>👀</MarginLeft></Link>
      </Intro>
    </FooterSection>
  )
}

export const FooterSection = styled.footer`
  margin: 0 auto;
  background-color: #000;
  padding: 80px 40px;
  text-align: center;
`;

export const Text = styled.p`
  color: #fff;
  display: inline-block;
  margin: 0;
`;

export const MarginLeft = styled('a')`
  margin: 0 0 0 20px;
  display: inline-block;
  font-size: 20px;
  vertical-align: middle;
`;

export const Intro = styled.section`
  text-align: center;
  display: inline-block;
  margin: 0 auto;
`;

export default Footer;