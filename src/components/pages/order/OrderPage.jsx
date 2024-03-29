import styled from 'styled-components'
import Navbar from "./Navbar/Navbar.jsx"
import { theme } from '../../../theme'
import Main from './Main/Main.jsx'
import { toast,  ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useState } from "react"
import { FaUserSecret } from "react-icons/fa"
import { useBasket } from '../../../hooks/useBasket.jsx'
import { useMenu } from '../../../hooks/useMenu.jsx'
import  OrderContext  from "../../../context/OrderContext.jsx"

export default function OrderPage() {
  //state

  const [isModeAdmin, setIsModeAdmin] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isAddSelected, setIsAddSelected] = useState(true)
  const [isEditSelected, setIsEditSelected] = useState(false)
  const {basket, handleAddToBasket, handleDeleteBasketProduct} = useBasket()
  const { menu, handleAdd } = useMenu()
  const [newProduct, setNewProduct] = useState("")

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    isAddSelected,
    setIsAddSelected,
    isEditSelected,
    setIsEditSelected,
    basket,
    handleAddToBasket,
    handleDeleteBasketProduct,
    menu,
    handleAdd,
    newProduct,
    setNewProduct

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

   <OrderContext.Provider value={orderContextValue}>
     <OrderPageStyled>
       <div className='container'>
       <ToastContainer/>
         <Navbar onToggleSuccess={toastNotif}/>
         <Main/>
       </div >
     </OrderPageStyled>
   </OrderContext.Provider>

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
