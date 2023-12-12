import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
const ProductsCard = ({ x, id, img, name, price }) => {
  
  return (
    <>
      <div className="products_card">
        <div className="products_card_content">
          <div className="products_card_content_img">
            <img src={img} alt="" />
            <Link to={"/detail/"+id}><button>Quick View</button></Link>
          </div>
          <div className="products_card_content_text">
            <div className="products_card_content_text_left">
              <Link>
                <p>{name}</p>
              </Link>
              <span>{price}$</span>
            </div>
            <div className="products_card_content_icon">
              <i className="fa-regular fa-heart"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
