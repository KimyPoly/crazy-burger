import Item from './Item';
import { fakeMenu2 } from './fakeMenu';
import styled from 'styled-components'

export default function Menu() {
  return (
    <MenuStyled>
      {fakeMenu2.map((menuItem) => (
        <Item key={menuItem.id} {...menuItem}/>
      ))}
    </MenuStyled>
  )
}
const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 76px;

`;
