import React from 'react'
import "./index.scss";
const Footer = () => {
    return (
        <>
            <footer id='footer'>
                <div className='footer_container'>
                    <div className='footer_top'>
                        <div className='categories'>
                            <h4>CATEGORIES</h4>
                            <ul>
                                <li>Women</li>
                                <li>Men</li>
                                <li>Shoes</li>
                                <li>Watches</li>
                            </ul>
                        </div>
                        <div className='help'>
                            <h4>HELP</h4>
                            <ul>
                                <li>Track Order</li>
                                <li>Returns</li>
                                <li>Shipping</li>
                                <li>FAQs</li>
                            </ul>
                        </div>
                        <div className='touch'>
                            <h4>Get in Touch</h4>
                            <p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
                            <div className='footer_icon'>
                                <i className="fa-brands fa-facebook-f"></i>
                                <i className="fa-brands fa-instagram"></i>
                                <i className="fa-brands fa-pinterest-p"></i>
                            </div>
                        </div>
                        <div className='newsletter'>
                            <h4>Newsletter</h4>
                            <form action="">
                                <input type="text" placeholder='email@example.com' />
                                <button>Subscribe</button>
                            </form>
                        </div>
                    </div>
                    <div className='footer_bottom'>
                        <div className='footer_bottom_img' >
                            <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-01.png.webp" alt="" />
                            <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-02.png.webp" alt="" />
                            <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-03.png.webp" alt="" />
                            <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-04.png.webp" alt="" />
                            <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-05.png" alt="" />
                        </div>
                        <div className='footer_bottom_copyright'>
                            <p>Copyright ©2023 All rights reserved | This template is made with &#9825;  by <span>Colorlib</span></p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer