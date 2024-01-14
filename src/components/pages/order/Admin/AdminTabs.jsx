import styled from 'styled-components'
import { theme } from "../../../../theme"

export default function AdminTabs() {
  return (
    <AdminTabsStyled>
      <div className='pop-window'>
        <a href="">+</a>
        </div>
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
  /* align-items: center; */
  background: ${theme.colors.background_white};
  width: 40%;
  height: 40px;
  margin-left: 30px;
  border: 1px solid ${theme.colors.greyLight} ;
  border-top-left-radius: ${theme.borderRadius.round};
  border-top-right-radius: ${theme.borderRadius.round};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) ;
  .pop-window {
    width: 10%;
    a{
      text-decoration: none;
      color: ${theme.colors.greyMedium};
    }
  }
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
