import styled from "styled-components"
import { theme } from '../../theme'

export default function Logo({className}) {

  return (
    <CenteredLogo className={className}>
      <h1>CRAZY</h1>
      <LogoImage src="/images/logo-orange.png" alt="Logo" />
      <h1>BURGER</h1>
   </CenteredLogo>
  )
}
const CenteredLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;


  h1 {
    font-family: "Amatic SC", cursive;
    font-weight: 700;
    font-size: ${theme.fonts.P4};;
    color: ${theme.colors.primary};
  }
`;

const LogoImage = styled.img`
  width: 80px;
  height: 60px;
`;
