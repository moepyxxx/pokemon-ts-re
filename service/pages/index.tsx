import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import styled from 'styled-components';

export default function Home() {

  return (
    <>
      <Header />
        <Title>ポケモンを探そう</Title>
      <Footer />
    </>
  )  
}

export const Title = styled.p`
  margin: 200px auto;
  text-align: center;
  font-size: 32px;
`;