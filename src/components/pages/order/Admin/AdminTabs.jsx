import styled from 'styled-components'
import { theme } from "../../../../theme"
import Tab from "../../../reusable-ui/Tab.jsx"
import { FiChevronDown, FiChevronUp  } from "react-icons/fi"
import { FaPencil } from "react-icons/fa6"
import { FaPlus } from "react-icons/fa"
import { useContext } from 'react'
import  OrderContext from "../../../../context/OrderContext.jsx"

export default function AdminTabs() {

  const {isCollapsed, setIsCollapsed } = useContext(OrderContext)

  const handleClick = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <AdminTabsStyled>
     <Tab Icon={<FiChevronDown/>} onClick={handleClick}/>
      <div className='add-item'>
        <FaPlus />
        <a href="">Ajouter un produit</a>
      </div>
      <div className='modify-item'>
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
      color: ${theme.colors.greyMedium}
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
  }

`;
