import { useState } from 'react';
import Item from './Item';
import { fakeMenu2 } from './fakeMenu';
import styled from 'styled-components'

export default function Menu() {

  const [menu, setMenu] = useState(fakeMenu2)
  return (
    <MenuStyled>
      {menu.map((menuItem) => (
        <Item key={menuItem.id} {...menuItem}/>
      ))}
    </MenuStyled>
  )
}
const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  overflow-y: scroll;

`;
