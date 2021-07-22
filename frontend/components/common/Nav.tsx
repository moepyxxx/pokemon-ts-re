import Link from 'next/link';
import styled from 'styled-components';

const Nav = () => {
  return(
    <Ul>
      <List>
        <Link href="/bookpokemon">ポケモン図鑑そうごう</Link>
      </List>
      <List>
        <Link href="/search">ポケモンを探す</Link>
      </List>
      <List>
        <Link href="/news">更新情報</Link>
      </List>
    </Ul>
  )
}

export const Ul = styled.ul`
  text-align: right;
`;
export const List = styled.li`
  display: inline-block;
  padding-left: 28px;
`;

export default Nav;