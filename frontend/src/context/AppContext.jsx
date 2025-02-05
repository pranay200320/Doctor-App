import { createContext } from "react";
import { doctors } from "../assets/assets";
import { specialityData } from "../assets/assets";
import { assets } from "../assets/assets";
export const AppContext = createContext();
const AppContextProvider = (props) => {
  const currency = "$";
  const value = {
    doctors,
    specialityData,
    currency,
    assets,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
