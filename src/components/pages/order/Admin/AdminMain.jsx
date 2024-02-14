import styled from 'styled-components'
import { theme } from "../../../../theme"

export default function AdminMain() {
  return (
    <AdminMainStyled>
      
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
