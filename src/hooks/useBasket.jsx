import { useState } from "react"
import {  fakeBasket} from "../components/pages/order/Main/fakeBasket.jsx";
import { deepClone } from "../utils/array.jsx"

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.SMALL)

  const handleAddToBasket = (productToAdd) => {
    // 1.copie du state
    const basketCopy = deepClone(basket)

    const isProductIsAlreadyInBasket = find(productToAdd.id, basketCopy)
    //2.manip de la copie (1er cas => le produit n'est pas dans basket, 2eme => il y est deja)
    if (!isProductIsAlreadyInBasket) {
      const newBasketProduct = {
        ...productToAdd,
        quantity: 1,
      }

      const basketUpdated = [newBasketProduct, basketCopy]
      
      //3.update du state
      setBasket(basketUpdated)
    }

  }
  return {basket, handleAddToBasket}
 }
