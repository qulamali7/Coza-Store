import React from "react";
import "./index.scss";
import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/PageTitle";
const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <PageTitle title={"Contact"} />
      <section id="contact">
        <div className="contact_container">
          <div className="contact_context">
            <div className="contact_email">
              <form>
                <h4>Send Us A Message</h4>
                <div className="form_input">
                  <i className="fa-regular fa-envelope"></i>
                  <input type="text" placeholder="Your Email Address" />
                </div>
                <div className="form_textarea">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="How Can We Help?"
                  ></textarea>
                </div>
                <button>Submit</button>
              </form>
            </div>
            <div className="contact_address">
              <div className="address">
                <i class="fa-solid fa-location-dot"></i>
                <div>
                  <h4>Address</h4>
                  <p>
                    Coza Store Center 8th floor, 379 Hudson St, New York, NY
                    10018 US
                  </p>
                </div>
              </div>
              <div className="talk">
                <i class="fa-solid fa-phone"></i>
                <div>
                  <h4>Lets Talk</h4>
                  <p>+1 800 1236879</p>
                </div>
              </div>
              <div className="support">
                <i class="fa-solid fa-envelope"></i>
                <div>
                  <h4>Sale Support</h4>
                  <p>contact@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3257398.2108153636!2d11.147902158809922!3d37.12765550480335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13106268d05359b3%3A0x10b042967b67d50!2sSicily%2C%20Italy!5e0!3m2!1sen!2saz!4v1702500283817!5m2!1sen!2saz"
          width="100%"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
