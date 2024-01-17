import { createContext} from "react";


const OrderContext = createContext({
  isModeAdmin: false,
  setIsModeAdmin: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {}
});

export default OrderContext
