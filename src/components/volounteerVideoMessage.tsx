import { motion } from "motion/react";
import { Link } from "react-router-dom";
import ModalVideo from "./modalVideo";

const VolounteerVideoMessage = () => {
  return (
    <section className="volounteer-section section-padding fix">
      <div className="container">
        <div className="volounteer-wrapper-3">
          <div className="circle-image">
            <img src="/img/home-2/cta/circle.png" alt="img" />
            <ModalVideo>
              <a href="#" className="video-btn video-popup">
                <i className="fa-solid fa-play" />
              </a>
            </ModalVideo>
          </div>
          <div className="right-shape">
            <img src="/img/home-3/shape.png" alt="img" />
          </div>
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="volounteer-content">
                <div className="section-title mb-0 style-2">
                  <h2 className="wow fadeInUp" data-delay=".3s">
                    <span>V</span>olunteer with us <br /> and be part of the{" "}
                    <br /> solution
                  </h2>
                </div>
                <div
                  className="volounteer-button wow fadeInUp"
                  data-delay=".5s"
                >
                  <Link to="/volounteer-details" className="theme-btn">
                    Be A Volunteer{" "}
                    <i className="fa-solid fa-arrow-right-long" />
                  </Link>
                  <Link to="/donation-details" className="theme-btn style-2">
                    Donate Now <i className="fa-solid fa-arrow-right-long" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <motion.div
                className="volunteer-image img-custom-anim-right"
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
              >
                <img src="/img/home-3/02.jpg" alt="img" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolounteerVideoMessage;
