import styled from 'styled-components'
import Navbar from "/Users/kim/crazy-burger/src/components/pages/Navbar.jsx"
import { theme } from '/Users/kim/crazy-burger/src/theme'


export default function OrderPage() {
  //state

  // comportement

  // affichage
  return (

    <OrderPageStyled>
      <div className='container'>
        <Navbar/>
        <div className="main">
        </div>
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
    border-radius: ${theme.borderRadius.round};
  }
`
