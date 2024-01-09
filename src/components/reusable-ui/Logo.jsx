import styled from "styled-components"
import { theme } from '../../theme'

export default function Logo() {

  return (
    <CenteredLogo>
      <h1>CRAZY</h1>
      <LogoImage src="public/images/logo-orange.png" alt="Logo" />
      <h1>BURGER</h1>
   </CenteredLogo>
  )
}
const CenteredLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${theme.spacing.md};
  transform: scale(2.5);


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
  margin: ${theme.spacing.md};
`;
