import { useParams } from "react-router-dom";
import styled from 'styled-components'
import Navbar from "./Navbar/Navbar.jsx"
import { theme } from '../../../theme'
import Main from './Main/Main.jsx'
import { toast,  ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useState } from "react"
import { FaUserSecret } from "react-icons/fa"


export default function OrderPage() {
  //state
  const {username} = useParams()
  const [isModeAdmin, setIsModeAdmin] = useState(false)

  const adminContextValue = {
    isModeAdmin,
    setIsModeAdmin
  }
  // comportement

  const toastNotif = () => {

    if (!isModeAdmin) {

      toast.info("Mode admin activé", {
        icon: <FaUserSecret size={30} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
    setIsModeAdmin(!isModeAdmin)
  }
  // affichage
  return (

    <OrderPageStyled>
      <div className='container'>
      <ToastContainer/>
        <Navbar username ={username} onToggleSuccess={toastNotif}/>
        <Main/>
      </div >
    </OrderPageStyled>

  )
}


const OrderPageStyled = styled.div`
  height: 100vh;
  width: 1440px;
  background: ${theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    height: 90vh;
    width: 1400px;
    background-color: red;
    border-radius: ${theme.borderRadius.extraRound};

  }
  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`
