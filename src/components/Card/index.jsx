import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
const Card = ({img,title}) => {
  return (
    <>
      <div className="card">
        <div className="card_content">
          <img
            src={img}
            alt=""
          />
          <Link className="card_content_text">
            <div className="card_content_text_top">
              <p>{title}</p>
              <span>Spring 2018</span>
            </div>
            <div className="card_content_text_bottom">
              <p>Shop Now</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
