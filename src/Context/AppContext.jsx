import { createContext } from "react";
import { ourTeam } from "../assets/assets";
export const AppContext = createContext();

const AppContextProvider = (props) => {


  const value = {
    ourTeam
  }




  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )

}

export default AppContextProvider;