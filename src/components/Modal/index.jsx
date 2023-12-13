import React, { useContext } from "react";
import "./index.scss";
import { BasketContext } from "../../context/BasketContext";
import { WishlistContext } from "../../context/WishlistContext";

const Modal = ({ modal, setModal }) => {
  const {addBasket} = useContext(BasketContext)
  const {addWishlist} = useContext(WishlistContext)
  return (
    <>
      <div className="modal">
        <div className="modal_container">
        <i className="fa-solid fa-x" onClick={()=>setModal(null)}></i>
          <div className="modal_context">
            <div className="modal_img">
              <img src={modal.images} alt="" />
            </div>
            <div className="modal_text">
              <h3>{modal.name}</h3>
              <p>{modal.description?.text}</p>
              <span>{modal.price}$</span>
              <div className="buttons">
                <button onClick={()=>addBasket(modal)}>Add Basket</button>
                <button onClick={()=>addWishlist(modal)}>Add Wishlist</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
