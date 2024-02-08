import {createContext} from "react"


const OrderContext = createContext({
  isModeAdmin: false,
  setIsModeAdmin: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {},

  basket: [],
  handleAdddToBasket: () => {},
  handleDeleteBasketProduct: () => {},

  menu: [],
  handleAdd: () => {},
  handleDelete: () => {},
  handleEdit: () => {},
  resetMenu: () => {}

})

export default OrderContext
