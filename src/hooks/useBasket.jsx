import { useState } from "react"
import { fakeBasket } from "../components/pages/order/Main/fakeBasket.jsx"
import { deepClone, find, findIndex, filter} from "../utils/array.jsx"

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY)

  const handleAddToBasket = (productToAdd) => {
    const basketCopy = deepClone(basket)
    const isProductAlreadyInBasket = find(productToAdd.id, basketCopy) !== undefined

    // 1er cas : le produit n'est pas déjà dans le basket
    if (!isProductAlreadyInBasket) {
      createNewProductInBasket(productToAdd, basketCopy, setBasket)
      return
    }
    // 2ème cas : le produit est déjà dans le basket
    incrementProductAlreadyInBasket(productToAdd, basketCopy)
  }

  const incrementProductAlreadyInBasket = (productToAdd, basketCopy) => {
    const indexOfBasketProductToIncrement = findIndex(productToAdd.id, basketCopy)
    basketCopy[indexOfBasketProductToIncrement].quantity += 1
    setBasket(basketCopy)
  }

  const createNewProductInBasket = (productToAdd, basketCopy, setBasket) => {
    const newBasketProduct = {
      ...productToAdd,
      quantity: 1,
    }
    const basketUpdated = [newBasketProduct, ...basketCopy]
    setBasket(basketUpdated)
  }

  const handleDeleteBasketProduct = (idBasketProduct) => {

    const basketUpdated = filter(idBasketProduct, basket)
    setBasket(basketUpdated)


  }


  return { basket, handleAddToBasket, handleDeleteBasketProduct }
}
