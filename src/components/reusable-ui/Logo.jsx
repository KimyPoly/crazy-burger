import styled from "styled-components"
import { theme } from '/Users/kim/crazy-burger/src/theme';

export default function Logo() {

  return (
    <CenteredLogo>
      <span>CRAZY</span>
      <LogoImage src="src/assets/images/logo-orange.png" alt="Logo" />
      <span>BURGER</span>
   </CenteredLogo>
  )
}
const CenteredLogo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${theme.spacing.md};
`;

const LogoImage = styled.img`
  width: 200px;
  height: 150px;
  margin: ${theme.spacing.md};
`;
