import React, { useContext } from 'react'
import "./index.scss";
import { WishlistContext } from '../../context/WishlistContext';
import { WishlistSideContext } from '../../context/WishlistSideContext';
import { BasketContext } from '../../context/BasketContext';
const WishlistSideBar = () => {
    const { wishlist, addWishlist } = useContext(WishlistContext)
    const { addBasket } = useContext(BasketContext)
    const { wishlistsidebar, ToggleWishlistsidebar,
    } = useContext(WishlistSideContext);
    return (
        <>
            <div className="wishlist_side">
                <div
                    className={`wishlist_side_container ${wishlistsidebar == true ? "wishlistcontainer_active" : ""
                        }`}
                >
                    <div className="wishlist_side_context">
                        <div className="wishlist_side_title">
                            <h4>YOUR WISHLIST</h4>
                            <i className="fa-solid fa-x" onClick={ToggleWishlistsidebar}></i>
                        </div>
                        {wishlist.map((x) => (
                            <div className="wishlist_cards">
                                <div className="wishlist_card">
                                    <div className="wishlist_img">
                                        <img src={x.images} alt="" />
                                    </div>
                                    <div className="wishlist_text">
                                        <p>
                                            <span>Name:</span>
                                            {x.name.slice(0, 20)}
                                        </p>
                                        <p>
                                            <span>Price:</span>
                                            {x.price}$
                                        </p>
                                    </div>
                                    <div className="wishlist_buttons">
                                        <button onClick={() => addBasket(x)}>Add Basket</button>
                                        <button onClick={() => addWishlist(x)}>x</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default WishlistSideBar