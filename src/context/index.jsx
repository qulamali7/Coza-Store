import React from "react";
import SearchProvider from "./SearchContext";
import SelectProvider from "./SelectContext";
import BasketProvider from "./BasketContext";
import SideBarProvider from "./SideBarContext";
import WishlistProvider from "./WishlistContext";
import WishlistSideProvider from "./WishlistSideContext";
import FilterProvider from "./FilterContext";

function MainProvider({ children }) {
  return (
    <FilterProvider>
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
    </FilterProvider>
  );
}

export default MainProvider;
