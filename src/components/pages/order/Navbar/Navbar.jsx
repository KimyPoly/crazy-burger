import Logo from "../../../reusable-ui/Logo.jsx"
import styled from 'styled-components'
import Profile from "./Profile.jsx"
import { theme } from "../../../../theme/index.jsx"
import ToggleButton from "../../../ToggleButton.jsx"
// import "react-toastify/dist/ReactToastify.css"

export default function Navbar({username}) {

  return (
   <NavBarStyled>
     <div className="navLogo">
      <Logo className="logo-order" onClick={() => window.location.reload()}/>
     </div>

     <div className="navRight">
      <div className="admin-button">
        <ToggleButton/>
      </div>

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
  .logo-order {
    cursor: pointer;
  }

  .navRight {
    display: flex;
  }


    .admin-button {
      color: orange;
      margin-right: 20px;
    }
`
