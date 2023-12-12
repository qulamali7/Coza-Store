import React from "react";
import SearchProvider from "./SearchContext";
import SelectProvider from "./SelectContext";
import BasketProvider from "./BasketContext";
import SideBarProvider from "./SideBarContext";
import WishlistProvider from "./WishlistContext";
import WishlistSideProvider from "./WishlistSideContext";

function MainProvider({ children }) {
  return (
    <WishlistSideProvider>
      <WishlistProvider>
        <SideBarProvider>
          <BasketProvider>
            <SelectProvider>
              <SearchProvider>{children}</SearchProvider>
            </SelectProvider>
          </BasketProvider>
        </SideBarProvider>
      </WishlistProvider>
    </WishlistSideProvider>


  );
}

export default MainProvider;
