import styled from 'styled-components'
import { theme } from "../../../../../theme"

export default function Footer() {
  return (
    <FooterStyled>
      <p>Made with 🧡</p>
    </FooterStyled>
  )
}
const FooterStyled = styled.div`
  height: 70px;
  width: 100%;
  background: black;
  /* position: absolute; */
  bottom: 0;
  text-align: center;
`;
