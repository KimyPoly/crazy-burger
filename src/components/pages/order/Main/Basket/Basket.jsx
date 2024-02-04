import styled from 'styled-components'
import { theme } from "../../../../../theme"
import Header from './Header';
import Footer from './Footer';
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';
import EmptyBasket from './EmptyBasket';
import BasketProducts from './BasketProducts';

export default function Basket() {

  const {basket} = useContext(OrderContext)

const isBasketEmpty = basket.length === 0

  return (
    <BasketStyled>
      <Header amountToPay={0}/>
      { isBasketEmpty ? <EmptyBasket/> : <BasketProducts/> }
      <BasketProducts/>
      <Footer/>
    </BasketStyled>
  )
}
const BasketStyled = styled.div`
  background: ${theme.colors.background_white};
  position: relative;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) ;
  font-family: "Amatic SC", cursive;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
