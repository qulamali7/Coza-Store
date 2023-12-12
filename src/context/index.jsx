import React from "react";
import SearchProvider from "./SearchContext";
import SelectProvider from "./SelectContext";
import BasketProvider from "./BasketContext";
import SideBarProvider from "./SideBarContext";

function MainProvider({ children }) {
  return (
    <SideBarProvider>
      <BasketProvider>
        <SelectProvider>
          <SearchProvider>{children}</SearchProvider>
        </SelectProvider>
      </BasketProvider>
    </SideBarProvider>
  );
}

export default MainProvider;
