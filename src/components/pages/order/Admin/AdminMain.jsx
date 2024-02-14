import styled from 'styled-components'
import { theme } from "../../../../theme"
import { useContext } from 'react'
import  OrderContext from "../../../../context/OrderContext.jsx"

export default function AdminMain() {

  const {
    isCollapsed,
    setIsCollapsed,
    isAddSelected,
    setIsAddSelected,
    isEditSelected,
    setIsEditSelected
  } = useContext(OrderContext)

  return (
    <AdminMainStyled>
      { isAddSelected && "Ajouter un produit"}
      { isEditSelected && "Modifier un produit"}
    </AdminMainStyled>
  )
}
const AdminMainStyled = styled.div`
  height: 80vh;
  width: 100%;
  background: ${theme.colors.background_white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2);


`;
