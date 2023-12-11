import React from "react";
import "./index.scss";
import { useState, useEffect } from "react";
import ProductsCard from "../ProductsCard";
const ProductsCards = () => {
  const [data, setData] = useState([]);
  async function GetFetch() {
    try {
      const res = await fetch(
        "https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products"
      );
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    GetFetch();
  }, []);

  return (
    <>
      <div className="products_cards">
        {data.map((x) => (
          <ProductsCard
            x={x}
            id={x.id}
            img={x.images}
            name={x.name}
            price={x.price}
          />
        ))}
      </div>
    </>
  );
};

export default ProductsCards;
