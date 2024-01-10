import Logo from "../../reusable-ui/Logo.jsx"
import styled from 'styled-components'
import Profile from "./Profile.jsx";

export default function Navbar() {

  return (
   <NavBarStyled>
     <div className="navLogo">
      <Logo/>
     </div>

     <div className="navRight">
      {/* <div className="admin-button">
        Admin button
      </div> */}

     <Profile/>
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
  padding-right: 30px;

 
    /* .admin-button {
      color: orange;
    } */
`
