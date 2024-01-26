import styled from 'styled-components'
import { theme } from "../../../../theme"
import Tab from "../../../reusable-ui/Tab.jsx";
import { FiChevronDown, FiChevronUp  } from "react-icons/fi";
import { useContext } from 'react';
import  OrderContext from "../../../../context/OrderContext.jsx";

export default function AdminTabs() {

  const {isCollapsed, setIsCollapsed } = useContext(OrderContext)

  const handleClick = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <AdminTabsStyled>
     <Tab Icon={<FiChevronDown/>} onClick={handleClick}/>
      <div className='add-item'>
        <a href="">Ajouter un produit</a>
      </div>
      <div className='modify-item'>
        <a href="">Modifier un produit</a>
      </div>
    </AdminTabsStyled>
  )
}
const AdminTabsStyled = styled.div`
  display: flex;
  padding: 0 20px;
  width: 50%;
  /* align-items: center; */




  /* .pop-window {
    width: 10%;
    button{
      border: none;
      color: ${theme.colors.greyMedium};

    }
  } */
  .add-item {
    width: 45%;
    background: black;
    a{
      color: ${theme.colors.greyMedium};
      text-decoration: none;
    }
    &:hover {
      text-decoration: underline;
    }
  }
  .modify-item {
    width: 45%;
    a{
      color: ${theme.colors.greyMedium};
      text-decoration: none;
    }
    &:hover {
      text-decoration: underline;
    }
  }

`;
