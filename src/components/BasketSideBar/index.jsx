import React, { useContext } from "react";
import "./index.scss";
import { BasketContext } from "../../context/BasketContext";
import { SideBarContext } from "../../context/SideBarContext";
const BasketSideBar = () => {
  const { basket, increaseCount, decreaseCount, removeBasket } =
    useContext(BasketContext);
  const { sidebar, ToggleSidebar } = useContext(SideBarContext);
  return (
    <>
      <div className="basket_side">
        <div
          className={`basket_side_container ${
            sidebar == true ? "container_active " : ""
          }`}
        >
          <div className="basket_side_context">
            <div className="basket_side_title">
              <h4>YOUR CART</h4>
              <i className="fa-solid fa-x" onClick={ToggleSidebar}></i>
            </div>
            {basket.map((x) => (
              <div className="basket_cards">
                <div className="basket_card">
                  <div className="basket_img">
                    <img src={x.images} alt="" />
                  </div>
                  <div className="basket_text">
                    <p>
                      <span>Name:</span>
                      {x.name.slice(0, 20)}
                    </p>
                    <p>
                      <span>Price:</span>
                      {Math.floor(x.price * x.count)}$
                    </p>
                    <p>
                      <span>Count:</span>
                      {x.count}
                    </p>
                  </div>
                  <div className="basket_buttons">
                    <button onClick={() => increaseCount(x)}>+</button>
                    <button onClick={() => decreaseCount(x)}>-</button>
                    <button onClick={() => removeBasket(x)}>x</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BasketSideBar;
