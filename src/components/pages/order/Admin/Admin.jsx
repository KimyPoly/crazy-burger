import { useState } from "react"
import AdminMain from "./AdminMain"
import AdminTabs from "./AdminTabs"
import styled from 'styled-components'

export default function Admin() {

  // const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <AdminStyled>
      <AdminTabs />
      <AdminMain/>
    </AdminStyled>
  )
}
const AdminStyled = styled.div`
  width: 100%;
  height: 290px;
  /* bottom: 0;
  left: 0;
  right: 0;
  position: absolute; */
  background: red;

`;
