import React, { useContext } from "react";
import "./index.scss";
import { useState, useEffect } from "react";
import ProductsCard from "../ProductsCard";
import { SearchContext } from "../../context/SearchContext";
import { SelectContext } from "../../context/SelectContext";
import { FilterContext } from "../../context/FilterContext";
const ProductsCards = () => {
  const { input } = useContext(SearchContext);
  const { select } = useContext(SelectContext);
  const {filterdata} = useContext(FilterContext)
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


  const productsFilter =
  filterdata === "All"
      ? data
      : data.filter((item) => item.category === filterdata);

  return (  
    <>
      <div className="products_cards">  
        {productsFilter
          .filter((x) => x.name.toLowerCase().includes(input.toLowerCase()))
          .filter((x) => x.model.toString().includes(select))
          .map((x) => (
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
