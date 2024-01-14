import styled from 'styled-components'
import { theme } from "../../../../theme"
import Menu from './Menu';
import Admin from '../Admin/Admin';
// import Basket from './Basket';


export default function Main() {
  return (
    <MainStyled>
      {/* <Basket/> */}
      <Menu/>
      <Admin/>
    </MainStyled>
  )
}
const MainStyled = styled.div`
  height: 80vh;
  /* padding: 0 40px; */
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: auto;
`;
