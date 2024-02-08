import styled from 'styled-components'
import { theme } from "../../../../theme"
import Menu from './Menu';
import Admin from '../Admin/Admin';
import Basket from './Basket/Basket.jsx';
import { useContext, useState } from "react"
import  OrderContext  from "../../../../context/OrderContext.jsx";

export default function Main({handleAddButton}) {

  const {isModeAdmin, setIsModeAdmin} = useContext(OrderContext)
// add Item to basket
  // const [basketItems, setBasketItems] = useState([]);

  // const addToBasket = (item) => {
  //   setBasketItems([...basketItems, item]);
  // }
//
  return (
    <MainStyled>
      <Basket/>
     <div className='menu-plus-admin'>
       <Menu handleAddButton={handleAddButton}/>
       {isModeAdmin && <Admin/>}
     </div>
    </MainStyled>
  )
}
const MainStyled = styled.div`
  height: 80vh;
  /* padding: 0 40px; */
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: auto;
  display: grid;
  grid-template-columns: 1fr 4fr;

  .menu-plus-admin {
    position: relative;
    overflow-y: hidden;
    display: grid;
  }
`;
