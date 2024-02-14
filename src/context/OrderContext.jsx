import {createContext} from "react"


const OrderContext = createContext({
  isModeAdmin: false,
  setIsModeAdmin: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {},

  isAddSelected: false,
  setIsAddSelected: () => {},

  isEditSelected: false,
  setIsEditSelected: () => {},

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
