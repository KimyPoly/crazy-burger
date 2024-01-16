import { createContext} from "react";


const AdminContext = createContext({
  isModeAdmin: false,
  setIsModeAdmin: () => {}
});

export default AdminContext
