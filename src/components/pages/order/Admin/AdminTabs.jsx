import styled from 'styled-components'
import { theme } from "../../../../theme"
import Tab from "../../../reusable-ui/Tab.jsx"
import { FiChevronDown, FiChevronUp  } from "react-icons/fi"
import { FaPencil } from "react-icons/fa6"
import { FaPlus } from "react-icons/fa"
import { useContext } from 'react'
import  OrderContext from "../../../../context/OrderContext.jsx"

export default function AdminTabs() {

  const {
    isCollapsed,
    setIsCollapsed,
    isAddSelected,
    setIsAddSelected,
    isEditSelected,
    setIsEditSelected
  } = useContext(OrderContext)

  const handleClick = () => {
    setIsCollapsed(!isCollapsed)
  }

  const selectAddTab = () => {
    setIsAddSelected(true)
    setIsEditSelected(false)
  }
  const selectEditTab = () => {
    setIsEditSelected(true)
    setIsAddSelected(false)
  }

  return (
    <AdminTabsStyled>
     <Tab Icon={<FiChevronDown/>} onClick={handleClick}/>
      <div className='add-item' onClick={selectAddTab}>
        <FaPlus />
        <a href="">Ajouter un produit</a>
      </div>
      <div className='modify-item' onClick={selectEditTab}>
        <FaPencil />
        <a href="">Modifier un produit</a>
      </div>
    </AdminTabsStyled>
  )
}
const AdminTabsStyled = styled.div`
  display: flex;
  padding: 0 20px;
  width: 50%;




  .add-item {
    width: 45%;
    background: black;
    padding: 8px;

    a{
      color: ${theme.colors.greyMedium};
      text-decoration: none;
    }
    &:hover {
      text-decoration: underline;
      color: white;
    }
    svg {
      color: ${theme.colors.greyMedium};
      margin-right: 5px;
    }
  }
  .modify-item {
    width: 45%;
    background: white;
    padding: 8px;
    a{
      color: ${theme.colors.greyMedium};
      text-decoration: none;
    }
    &:hover {
      text-decoration: underline;
    }
    svg {
      margin-right: 5px;
    }
  }

`;
