import styled from 'styled-components'
import { theme } from "../../../../../theme"

export default function EmptyBasket() {
  return (
    <EmptyBasketStyled>
      <span className='empty-message'>Votre panier est vide.</span>
    </EmptyBasketStyled>
  )
}
const EmptyBasketStyled = styled.div`
  /* box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset; */
  flex: 1;

  .empty-message {
    color: black;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    line-height: 2;
    font-size: ${theme.fonts.P3};
  }
`
