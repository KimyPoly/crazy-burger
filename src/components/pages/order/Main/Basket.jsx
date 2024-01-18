import styled from 'styled-components'
import { theme } from "../../../../theme"

export default function Basket() {
  return (
    <BasketStyled>
      <div className="total-price">
        <p>Total</p>
        <p>Price</p>
      </div>
      <div className="main-basket">
      </div>
      <div className="footer">
        <p>Footer</p>
      </div>
    </BasketStyled>
  )
}
const BasketStyled = styled.div`
  background: ${theme.colors.background_white};
  position: relative;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  font-family: "Amatic SC", cursive;

  .total-price {
    height: 70px;
    width: 100%;
    background: black;
    top: 0;
    position: absolute;
    display: flex;
    justify-content: space-between;
    font-size: ${theme.fonts.P3};
    color: ${theme.colors.primary}
  }
  .footer {
    height: 70px;
    width: 100%;
    background: black;
    position: absolute;
    bottom: 0;
  }
`;
