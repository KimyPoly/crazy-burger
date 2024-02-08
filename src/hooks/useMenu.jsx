import { useState } from "react"
import { fakeMenu2 } from "../components/pages/order/Main/fakeMenu.jsx";
import { deepClone } from "../utils/array.jsx"

export const useMenu = () => {
  const [menu, setMenu] = useState(fakeMenu2)

  // comportements (gestionnaire de state ou "state handlers")
  const handleAdd = (newProduct) => {
    // 1. copie du tableau
    const menuCopy = deepClone(menu)

    // 2. manip de la copie du tableau
    const menuUpdated = [newProduct, ...menuCopy]

    // 3. update du state
    setMenu(menuUpdated)
  }

  return { menu, setMenu, handleAdd}
}
