import React, { useState, useEffect, useContext } from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import { BasketContext } from "../../context/BasketContext";
import { WishlistContext } from "../../context/WishlistContext";
import { Helmet } from "react-helmet-async";
const Detail = () => {
  const { addBasket } =
    useContext(BasketContext);
  const { addWishlist } = useContext(WishlistContext)
  let { id } = useParams();
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    GetFetch();
  }, []);
  async function GetFetch() {
    try {
      const res = await fetch(
        `https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products/${id}`
      );
      const data = await res.json();
      setDetail(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <>
    
    <Helmet>
        <title>Product</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <section id="detail">
        <div className="detail_container">
          <div className="detail_context">
            <div className="detail_img">
              <img src={detail.images} alt="" />
            </div>
            <div className="detail_text">
              <h3>{detail.name}</h3>
              <p>{detail.description?.text}</p>
              <span>{detail.price}$</span>
              <div className="buttons">
                <button onClick={() => addBasket(detail)}>Add Basket</button>
                <button onClick={() => addWishlist(detail)}>Add Wishlist</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Detail;
