import AdminMain from "./AdminMain"
import AdminTabs from "./AdminTabs"
import styled from 'styled-components'

export default function Admin() {
  return (
    <AdminStyled>
      <AdminTabs/>
      <AdminMain/>
    </AdminStyled>
  )
}
const AdminStyled = styled.div`
  width: 100%;
  height: 290px;

`;
