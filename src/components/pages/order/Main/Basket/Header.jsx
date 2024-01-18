import styled from 'styled-components'
import { theme } from "../../../../../theme"

export default function Header({amountToPay}) {
  return (
    <HeaderStyled>
      <p className='total'>Total</p>
      <p className='amount'> {amountToPay} €</p>
    </HeaderStyled>
  )
}
const HeaderStyled = styled.div`
   height: 70px;
    width: 100%;
    background: black;
    top: 0;
    position: absolute;
    display: flex;
    justify-content: space-between;
    font-size: ${theme.fonts.P3};
    color: ${theme.colors.primary}
`;
