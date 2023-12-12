import React, { createContext } from "react";
import { useState } from "react";
export const WishlistSideContext = createContext();
function WishlistSideProvider({ children }) {
  const [wishlistsidebar, setWishlistsidebar] = useState(false);
  const ToggleWishlistsidebar = () => {
    wishlistsidebar === true ? setWishlistsidebar(false) : setWishlistsidebar(true);
  };
  const data = {
    wishlistsidebar,
    ToggleWishlistsidebar,
  };
  return (
    <WishlistSideContext.Provider value={data}>{children}</WishlistSideContext.Provider>
  );
}

export default WishlistSideProvider;