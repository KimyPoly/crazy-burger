import styled from 'styled-components'
import { theme } from "../../../../../theme"
import Header from './Header';
import Footer from './Footer';
import MainBasket from './MainBasket';

export default function Basket() {
  return (
    <BasketStyled>
      <Header amountToPay={0}/>
      <MainBasket/>
      <Footer/>
    </BasketStyled>
  )
}
const BasketStyled = styled.div`
  background: ${theme.colors.background_white};
  position: relative;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  font-family: "Amatic SC", cursive;
`;
