import { motion } from "motion/react";
import { Link } from "react-router-dom";
import ModalVideo from "../modalVideo";

const AboutThree = () => {
  return (
    <section className="about-section section-padding fix">
      <div className="container">
        <div className="about-wrapper-3">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title style-2 mb-0">
                  <span className="sub-title wow fadeInUp">About Us</span>
                  <h2 className="wow fadeInUp" data-delay=".3s">
                    <span>U</span>nited for a cause <br /> inspired by humanity.
                  </h2>
                </div>
                <p className="text wow fadeInUp" data-delay=".3s">
                  Overall, I cannot recommend The Gourmet Bistro highly enough.
                  If you're looking for a restaurant that serves delicious,
                  beautifully presented.
                </p>
                <div className="about-box wow fadeInUp" data-delay=".5s">
                  <div className="icon">
                    <img src="/img/home-3/icon/01.svg" alt="img" />
                  </div>
                  <div className="content">
                    <h5>Helping people rebuild and prepare</h5>
                    <p>
                      Overall I cannot recommend The Gourmet Bistro highly
                      enough. If you're looking .
                    </p>
                  </div>
                </div>
                <div className="about-box mb-0 wow fadeInUp" data-delay=".3s">
                  <div className="icon">
                    <img src="/img/home-3/icon/02.svg" alt="img" />
                  </div>
                  <div className="content">
                    <h5>putting people first in everything we do</h5>
                    <p>
                      Overall I cannot recommend The Gourmet Bistro highly
                      enough. If you're looking .
                    </p>
                  </div>
                </div>
                <div
                  className="about-button-item wow fadeInUp"
                  data-delay=".5s"
                >
                  <Link to="/about" className="theme-btn">
                    More About Us <i className="fa-solid fa-arrow-right-long" />
                  </Link>
                  <div className="info-item">
                    <div className="client-image">
                      <img src="/img/home-1/about/client.png" alt="img" />
                    </div>
                    <div className="info-content">
                      <h5>James Anderson</h5>
                      <span>Software Engineer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-image">
                <motion.img
                  src="/img/home-3/about/02.jpg"
                  alt="img"
                  className="wow img-custom-anim-right"
                  initial={{
                    x: "5%",
                    clipPath: "inset(0 0 0 100%)",
                    opacity: 0,
                  }}
                  whileInView={{
                    x: "0%",
                    clipPath: "inset(0 0 0 0)",
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1.3,
                    ease: [0.645, 0.045, 0.355, 1],
                    delay: 0.3,
                  }}
                />
                <div className="circle-image">
                  <img src="/img/home-2/cta/circle.png" alt="img" />
                  <ModalVideo>
                    <Link to="#" className="video-btn video-popup">
                      <i className="fa-solid fa-play" />
                    </Link>
                  </ModalVideo>
                </div>
                <div className="shape">
                  <img src="/img/home-3/about/shape.png" alt="img" />
                </div>
                <div className="about-image-2">
                  <img src="/img/home-3/about/01.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutThree;
