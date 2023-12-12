import React, { createContext } from "react";
import { useState } from "react";
export const SideBarContext = createContext();
function SideBarProvider({ children }) {
  const [sidebar, setSidebar] = useState(false);
  const ToggleSidebar = () => {
    sidebar === true ? setSidebar(false) : setSidebar(true);
  };
  const data = {
    sidebar,
    ToggleSidebar,
  };
  return (
    <SideBarContext.Provider value={data}>{children}</SideBarContext.Provider>
  );
}

export default SideBarProvider;
