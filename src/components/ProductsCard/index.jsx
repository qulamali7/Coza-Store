import React, { useContext, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { WishlistContext } from "../../context/WishlistContext";
import Modal from "../Modal";
const ProductsCard = ({ x, id, img, name, price }) => {
  const [modal, setModal] = useState(null);
  const { addWishlist, checkAtWishList } = useContext(WishlistContext);

  return (
    <>
      <div className="products_card">
        {modal ? <Modal modal={modal} setModal={setModal} /> : null}
        <div className="products_card_content">
          <div className="products_card_content_img">
            <img src={img} alt="" />
            <Link>
              <button onClick={() => setModal(x)}>Quick View</button>
            </Link>
          </div>
          <div className="products_card_content_text">
            <div className="products_card_content_text_left">
              <Link to={"/detail/"+id}>
                <p>{name}</p>
              </Link>
              <span>{price}$</span>
            </div>
            <div className="products_card_content_icon">
              <i
                className={`fa-regular fa-heart ${
                  checkAtWishList({ x, id, img, name, price })
                    ? "fa-solid fa-heart"
                    : ""
                }`}
                onClick={() => addWishlist(x)}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
