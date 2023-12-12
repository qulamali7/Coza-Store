import React, { useContext } from "react";
import "./index.scss";
import { SearchContext } from "../../context/SearchContext";
import { SelectContext } from "../../context/SelectContext";
const ProductsFilter = () => {
  const { input, HandleSearch } = useContext(SearchContext);
  const { select, handleSelect } = useContext(SelectContext);
  return (
    <>
      <div className="products_filter">
        <div className="products_filter_left">
          <button>All Products</button>
          <button>Women</button>
          <button>Men</button>
          <button>Bag</button>
          <button>Shoes</button>
          <button>Watches</button>
        </div>
        <div className="products_filter_right">
          <div className="products_filter_right_select">
            <i className="fa-solid fa-filter"></i>
            <select
              value={select}
              name="products"
              id="products"
              onChange={handleSelect}
            >
              <option value="">All Model</option>
              <option>Loafers</option>
              <option>Sneakers</option>
              <option>Sandals</option>
              <option>Heels</option>
              <option>Boots</option>
              <option>Flats</option>
            </select>
          </div>
          <div className="products_filter_right_inp">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search"
              onChange={HandleSearch}
              value={input}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsFilter;
