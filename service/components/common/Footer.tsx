import Logo from "./Logo";
import styled from 'styled-components';
import { RootState } from '../../store'
import { useSelector, useDispatch } from 'react-redux'

const Footer = () => {
  const pokemon = useSelector((state: RootState) => state.pokemon)
  const dispatch = useDispatch()
  console.log(pokemon);
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