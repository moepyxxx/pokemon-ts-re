import Link from 'next/link';
import styled from 'styled-components';

const Nav = () => {
  return(
    <Ul>
      <List>
        <Link href="/">ポケモン図鑑そうごう</Link>
      </List>
      <List>
        <Link href="/news">更新情報</Link>
      </List>
      <List>
        <Link href="/disable">ポケモンを探しにいく</Link>
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