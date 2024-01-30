import styled from 'styled-components'
import { theme } from "../../../../../theme"

export default function MainBasket({items}) {
  return (
    <MainBasketStyled>
      <span className='empty-message'>Votre panier est vide.</span>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </MainBasketStyled>
  )
}
const MainBasketStyled = styled.div`
  /* box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset; */
  flex: 1;


  .empty-message {
    color: black;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;;
    line-height: 2;
    font-size: ${theme.fonts.P3};
  }
`
