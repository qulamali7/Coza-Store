import React, { createContext, useState } from 'react'
export const WishlistContext = createContext();
function WishlistProvider({ children }) {
    const [wishlist, setWishlist] = useState([])
    function addWishlist(item) {
        if (wishlist.find((x) => x.id === item.id)) {
            setWishlist(wishlist.filter((x) => x.id !== item.id))
        }
        else {
            setWishlist([...wishlist, item])
        }
    }
    function checkAtWishList(item) {
        if (wishlist.find((x) => x.id === item.id)) {
            return true;
        }
        return false;
    }
    const data = {
        wishlist,
        addWishlist, checkAtWishList
    }
    return (
        <WishlistContext.Provider value={data}>{children}</WishlistContext.Provider>
    )
}

export default WishlistProvider