import Logo from "./Logo";
import Nav from "./Nav";
import styled from 'styled-components';

const Header = () => {
  return(
    <HeaderSection>
      <Logo />
      <Nav />
    </HeaderSection>
  )
}

export const HeaderSection = styled.header`
  max-width: 1500px;
  margin: 0 auto;
  padding: 15px 20px;
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  &::before {
    display: table;
    z-index: -5;
    content: '';
    width: 100%;
    height: 400px;
    position: absolute;
    top: -160px;
    left: 50%;
    transform: translateX(-50%) skewY(-6deg);
    background-color: #fff;
  }
`;

export default Header;