import { Link } from "react-router-dom";
import Logo from "../../reusable-ui/Logo.jsx"
import styled from 'styled-components'

export default function Navbar({username}) {

  return (
   <NavBarStyled>
     <div className="navLogo">
      <Logo/>
     </div>
     <div className="navRight">
      <h3>Hey, {username}</h3>
      <Link to="/">Se déconnecter</Link>
     </div>
   </NavBarStyled>
  )
}

const NavBarStyled = styled.div`
  height: 10vh;
  background-color: white;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  .navRight {
    color: black;

  }

  .navLogo {

  }

`;
