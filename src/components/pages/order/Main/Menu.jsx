import { useContext } from 'react';
import Item from './Item';
import styled from 'styled-components'
import  OrderContext  from "../../../../context/OrderContext.jsx"
import {find} from "../../../../utils/array.jsx";

export default function Menu() {

  // const [menu, setMenu] = useState(fakeMenu2)
  const {menu, handleAddToBasket} = useContext(OrderContext)

  const handleAddButton = (e, idProduct) => {
    // const productToAdd = menu.find((menuProduct) => menuProduct.id === idProduct)
    const productToAdd = find(idProduct, menu)
    // console.log(productToAdd)
    handleAddToBasket(productToAdd)
  }



  return (
    <MenuStyled>
      {menu.map((menuItem) => (
        <Item
          key={menuItem.id}
          {...menuItem}
          onAdd = {(e) => handleAddButton(e, menuItem.id)}
          />
      ))}
    </MenuStyled>
  )
}
const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  overflow-y: scroll;

`;
