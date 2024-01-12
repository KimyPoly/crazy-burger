import LoginForm from "./LoginForm"
import Logo from "../../reusable-ui/Logo.jsx"
import styled from 'styled-components'


export default function LoginPage() {
  //affichage
  return (
  <LoginPageStyle>
    <Logo className={"logo-login"}/>
    <LoginForm/>
  </LoginPageStyle>
)
}

const LoginPageStyle = styled.div`
/* background-image: url("src/assets/images/burger-background.jpg"); */
background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/burger-background.jpg');
background-size: cover;
background-position: center;
height: 100vh;
width: 211vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: "Amatic SC", cursive;

.logo-login {
  transform: scale(2.5);
}
`
