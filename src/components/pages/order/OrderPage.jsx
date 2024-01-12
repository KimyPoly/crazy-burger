import { useParams } from "react-router-dom";
import styled from 'styled-components'
import Navbar from "./Navbar/Navbar.jsx"
import { theme } from '../../../theme'
import Main from './Main/Main.jsx'


export default function OrderPage() {
  //state
  const {username} = useParams()
  // comportement

  // affichage
  return (

    <OrderPageStyled>
      <div className='container'>
        <Navbar username ={username}/>
        <Main/>
      </div >
    </OrderPageStyled>

  )
}


const OrderPageStyled = styled.div`
  height: 100vh;
  width: 1440px;
  background: ${theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    height: 90vh;
    width: 1400px;
    background-color: red;
    border-radius: ${theme.borderRadius.extraRound};

  }
`
