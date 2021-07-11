import Logo from "./Logo";
import styled from 'styled-components';

const Footer = () => {
  return(
    <FooterSection>
      <Logo type="black" />
      <Text>
        https://github.com/moepyxxx/pokemon-ts-re/
      </Text>
    </FooterSection>
  )
}

export const FooterSection = styled.footer`
  margin: 0 auto;
  background-color: #000;
  padding: 80px 40px;
`;
export const Text = styled.p`
  color: #fff;
  margin: 0;
`;

export default Footer;