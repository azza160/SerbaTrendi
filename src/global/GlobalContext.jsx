/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";

export const GlobalContextData = createContext();

function GlobalContext({ children }) {
  const hello = "azza";

  return (
    <GlobalContextData.Provider value={hello}>
      {children}
    </GlobalContextData.Provider>
  );
}

export const getData = () => {
  return useContext(GlobalContextData);
};

export default GlobalContext;
