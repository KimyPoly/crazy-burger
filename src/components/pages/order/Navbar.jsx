import Logo from "../../reusable-ui/Logo.jsx"
import styled from 'styled-components'
import Profile from "./Profile.jsx";
import { theme } from "/Users/kim/crazy-burger/src/theme"

export default function Navbar({username}) {

  return (
   <NavBarStyled>
     <div className="navLogo">
      <Logo/>
     </div>

     <div className="navRight">
      {/* <div className="admin-button">
        Admin button
      </div> */}

     <Profile username={username}/>
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
  align-items: center;
  padding-left: 20px;
  padding-right: 30px;
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};


    /* .admin-button {
      color: orange;
    } */
`
