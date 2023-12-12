import React, { useContext } from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { SideBarContext } from "../../context/SideBarContext";
import BasketSideBar from "../../components/BasketSideBar";
const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const stickyNavbar = () => {
    if (window.scrollY >= 5) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", stickyNavbar);
  const {ToggleSidebar} = useContext(SideBarContext);
  return (
    <>
    <BasketSideBar/>
      <header id={navbar ? "sticky" : "header"}>
        <div className="header_container">
          <div className="header_top">
            <div className="header_top_container">
              <div className="header_top_container_left">
                <p>Free shipping for standard order over $100</p>
              </div>
              <div className="header_top_container_right">
                <ul>
                  <li>Help & FAQs</li>
                  <li>My Account</li>
                  <li>EN</li>
                  <li>USD</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="header_main">
            <nav>
              <Link to={"/"} className="header-img">
                <img
                  src="https://preview.colorlib.com/theme/cozastore/images/icons/logo-01.png.webp"
                  alt=""
                />
              </Link>
              <div className="header_main_list">
                <ul>
                  <li>
                    <NavLink to={"/"}>Home</NavLink>
                  </li>
                  <NavLink>
                    <li>Shop</li>
                  </NavLink>
                  <NavLink>
                    <li>Features</li>
                  </NavLink>
                  <NavLink>
                    <li>Blog</li>
                  </NavLink>
                  <NavLink>
                    <li>About</li>
                  </NavLink>
                  <NavLink>
                    <li>Contact</li>
                  </NavLink>
                </ul>
              </div>
              <div className="header_main_icon">
                <div>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div>
                  <i
                    className="fa-solid fa-cart-shopping"
                    onClick={ToggleSidebar}
                  ></i>
                </div>
                <div>
                  <i className="fa-regular fa-heart"></i>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
