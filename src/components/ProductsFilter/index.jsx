import React, { useContext } from "react";
import "./index.scss";
import { SearchContext } from "../../context/SearchContext";
import { SelectContext } from "../../context/SelectContext";
import { FilterContext } from "../../context/FilterContext";
const ProductsFilter = () => {
  const { input, HandleSearch } = useContext(SearchContext);
  const { select, handleSelect } = useContext(SelectContext);
  const { setFilterdata } = useContext(FilterContext);
  return (
    <>
      <div className="products_filter">
        <div className="products_filter_left">
          <button onClick={() => {
              setFilterdata("All");
            }} >All</button>
          <button
            onClick={() => {
              setFilterdata("Womens");
            }}
          >
            Women
          </button>
          <button
            onClick={() => {
              setFilterdata("Mens");
            }}
          >
            Men
          </button>
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
