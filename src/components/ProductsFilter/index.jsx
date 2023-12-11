import React from 'react'
import "./index.scss";
const ProductsFilter = () => {
  return (
    <>
    <div className='products_filter'>
        <div className='products_filter_left'>
            <button>All Products</button>
            <button>Women</button>
            <button>Men</button>
            <button>Bag</button>
            <button>Shoes</button>
            <button>Watches</button>
        </div>
        <div className='products_filter_right'>
            <select name="" id="">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
            </select>
            <div className='products_filter_right_inp'>
            <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" />
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductsFilter