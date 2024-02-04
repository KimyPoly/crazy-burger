import { useState } from "react"
import {  fakeBasket} from "../components/pages/order/Main/fakeBasket.jsx";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.MEDIUM)
  return {basket}
 }
