import React from "react";
import "./index.scss";
import ProductsCards from "../ProductsCards";
import ProductsFilter from "../ProductsFilter";
const Products = () => {
  return (
    <>
      <section id="products">
        <div className="products_container">
          <div className="products_title">
            <h3>PRODUCT OVERVIEW</h3>
          </div>
          <ProductsFilter />
          <ProductsCards />
          <div className="load_products">
            <button>Load More</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
