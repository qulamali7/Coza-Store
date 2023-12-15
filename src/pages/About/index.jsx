import React from "react";
import "./index.scss";
import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/PageTitle";
const About = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <PageTitle title={"About"} />
      <section id="our">
        <div className="our_container">
          <div className="our_story">
            <div className="our_story_text">
              <div className="our_story_text_content">
                <h3>Our Story</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris consequat consequat enim, non auctor massa ultrices
                  non. Morbi sed odio massa. Quisque at vehicula tellus, sed
                  tincidunt augue. Orci varius natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus. Maecenas varius
                  egestas diam, eu sodales metus scelerisque congue.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Maecenas gravida justo eu
                  arcu egestas convallis. Nullam eu erat bibendum, tempus ipsum
                  eget, dictum enim. Donec non neque ut enim dapibus tincidunt
                  vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec
                  condimentum euismod tortor, eget facilisis diam faucibus et.
                  Morbi a tempor elit.
                </p>
                <p>
                  Donec gravida lorem elit, quis condimentum ex semper sit amet.
                  Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut
                  fringilla turpis in vehicula vehicula. Pellentesque congue ac
                  orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a
                  arcu facilisis, eu sodales lectus sagittis. Etiam
                  pellentesque, magna vel dictum rutrum, neque justo eleifend
                  elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut
                  commodo efficitur, quam velit convallis ipsum, et maximus enim
                  ligula ac ligula.
                </p>
                <p>
                  Any questions? Let us know in store at 8th floor, 379 Hudson
                  St, New York, NY 10018 or call us on (+1) 96 716 6879
                </p>
              </div>
            </div>
            <div className="our_story_img">
              <div className="our_story_img_content">
                <div className="img_border"></div>
                <div className="hover_img">
                  <img
                    src="https://preview.colorlib.com/theme/cozastore/images/about-01.jpg.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="our_mission">
            <div className="our_mission_img">
              <div className="our_mission_img_content">
                <div className="img_border"></div>
                <div className="hover_img">
                  <img
                    src="https://preview.colorlib.com/theme/cozastore/images/about-02.jpg.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="our_mission_text">
              <div className="our_mission_text_content">
                <h3>Our Mission</h3>
                <p>
                Mauris non lacinia magna. Sed nec lobortis dolor. Vestibulum rhoncus dignissim risus, sed consectetur erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam maximus mauris sit amet odio convallis, in pharetra magna gravida. Praesent sed nunc fermentum mi molestie tempor. Morbi vitae viverra odio. Pellentesque ac velit egestas, luctus arcu non, laoreet mauris. Sed in ipsum tempor, consequat odio in, porttitor ante. Ut mauris ligula, volutpat in sodales in, porta non odio. Pellentesque tempor urna vitae mi vestibulum, nec venenatis nulla lobortis. Proin at gravida ante. Mauris auctor purus at lacus maximus euismod. Pellentesque vulputate massa ut nisl hendrerit, eget elementum libero iaculis.
                </p>
               <div className="quote">
                <p>Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.</p>
                <span>- Steve Job’s</span>
               </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
