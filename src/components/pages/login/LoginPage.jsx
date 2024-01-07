import { useState } from "react"
import LoginForm from "./LoginForm"
import Logo from "/Users/kim/crazy-burger/src/components/reusable-ui/Logo"
import styled from 'styled-components';


export default function LoginPage() {
  //affichage
  return (
  <LoginPageStyle>
    <Logo/>
    <LoginForm/>
  </LoginPageStyle>
)
}

const LoginPageStyle = styled.div`
/* background-image: url("src/assets/images/burger-background.jpg"); */
background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('src/assets/images/burger-background.jpg');
background-size: cover;
background-position: center;
height: 100vh;
width: 210vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
