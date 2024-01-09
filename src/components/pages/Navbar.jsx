import { Link, useParams } from "react-router-dom";
import Logo from "../reusable-ui/Logo.jsx"
import styled from 'styled-components'

export default function Navbar() {

  const {username} = useParams()

  return (
   <NavBarstyled>
     <div className="navLogo">
      <Logo/>
     </div>
     <div className="navRight">
      <h3>Bonjour {username}</h3>
      <Link to="/">Se déconnecter</Link>
     </div>
   </NavBarstyled>
  )
}

const NavBarstyled = styled.div`
  height: 95px;
  width: 1400px;
  background-color: white;
  position: fixed;
  top: 0;

  .navRight {
    color: black;
    float: right;
  }

  .navLogo {
    float: left;
    width: 240px;
  }

`;
