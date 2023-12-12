import React, { useContext } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { WishlistContext } from "../../context/WishlistContext";
const ProductsCard = ({ x, id, img, name, price }) => {
  const { addWishlist,checkAtWishList } = useContext(WishlistContext)

  return (
    <>
      <div className="products_card">
        <div className="products_card_content">
          <div className="products_card_content_img">
            <img src={img} alt="" />
            <Link to={"/detail/" + id}><button>Quick View</button></Link>
          </div>
          <div className="products_card_content_text">
            <div className="products_card_content_text_left">
              <Link>
                <p>{name}</p>
              </Link>
              <span>{price}$</span>
            </div>
            <div className="products_card_content_icon">
              <i className={`fa-regular fa-heart ${checkAtWishList({x, id, img, name, price })
                  ? "fa-solid fa-heart"
                  : ""
                }`} onClick={() => addWishlist(x)}></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
