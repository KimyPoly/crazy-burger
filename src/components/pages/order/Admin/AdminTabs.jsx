import styled from 'styled-components'

export default function AdminTabs() {
  return (
    <AdminTabsStyled>
      <div className='pop-window'>+</div>
      <div className='add-item'>Ajouter un produit</div>
      <div className='modify-item'>Modifier un produit</div>
    </AdminTabsStyled>
  )
}
const AdminTabsStyled = styled.div`
  display: flex;
  background: black;
  width: 40%;
  height: 45px;
  margin-left: 30px;

`;
