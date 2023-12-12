import React, { useContext } from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { SideBarContext } from "../../context/SideBarContext";
import BasketSideBar from "../../components/BasketSideBar";
import { BasketContext } from "../../context/BasketContext";
import { WishlistContext } from "../../context/WishlistContext";
import WishlistSideBar from "../../components/WishlistSideBar";
import { WishlistSideContext } from "../../context/WishlistSideContext";
const Header = () => {
  const { basket } = useContext(BasketContext)
  const { wishlist } = useContext(WishlistContext)
  const [navbar, setNavbar] = useState(false);
  const stickyNavbar = () => {
    if (window.scrollY >= 5) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  // const ToggleSidebar = () => {
  //   sidebar === true ? setSidebar(false) : setSidebar(true);
  // };
  window.addEventListener("scroll", stickyNavbar);
  const { ToggleSidebar } = useContext(SideBarContext);
  const { ToggleWishlistsidebar } = useContext(WishlistSideContext)
  return (
    <>
      <BasketSideBar />
      <WishlistSideBar />
      <header className={`header ${navbar === true ? "sticky " : ""
        }`}>
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
                  <li>
                    <NavLink>
                      Shop
                    </NavLink>
                  </li>
                  <li>
                    <NavLink>
                      Features <sup>HOT</sup>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink>
                      Blog
                    </NavLink>
                  </li>
                  <li>
                    <NavLink>
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink>
                      Contact
                    </NavLink>
                  </li>
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
                  ><sup>{basket.length ? basket.length : 0}</sup></i>
                </div>
                <div>
                  <i className="fa-regular fa-heart" onClick={ToggleWishlistsidebar}><sup>{wishlist.length ? wishlist.length : 0}</sup></i>
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
