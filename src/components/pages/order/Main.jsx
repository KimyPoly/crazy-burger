import styled from 'styled-components'
import { theme } from "../../../theme"
import Item from './Item';
import { fakeMenu2 } from './fakeMenu';

export default function Main() {
  return (
    <MainStyled>
      {fakeMenu2.map((menuItem) => (
        <Item key={menuItem.id} {...menuItem}/>
      ))}
    </MainStyled>
  )
}
const MainStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 76px;
  height: 80vh;
  padding: 40px;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
`;
