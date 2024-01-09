import { Link, useParams } from "react-router-dom";
import Logo from "../reusable-ui/Logo.jsx"
import styled from 'styled-components'

export default function Navbar() {

  const {username} = useParams()

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
  height: 90px;
  width: 100%;
  background-color: white;
  /* position: fixed; */
  top: 0;

  .navRight {
    color: black;
    float: right;
  }

  .navLogo {
    float: left;
    width: 200px;
  }

`;
