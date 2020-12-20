import { createContext, useContext, useState } from "react";

const StateContext = createContext();

export default function Layout({children}) {
  const [dark ,setDark] = useState(true);

  const value = {
    dark,
    setDark
  }

  return (
    <StateContext.Provider value={value}>
      {children}
    </StateContext.Provider>
  )
}

export const useDark = () => useContext(StateContext);