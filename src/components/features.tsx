import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <section className="feature-section-3 section-padding fix pt-0">
      <div className="container">
        <div className="feature-wrapper-3">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="feature-content">
                <div className="section-title style-2 mb-0">
                  <span className="sub-title wow fadeInUp">Success Story</span>
                  <h2 className="wow fadeInUp" data-delay=".3s">
                    <span>W</span>e help fellow <br /> nonprofits access the
                    funding tools training
                  </h2>
                </div>
                <p className="text wow fadeInUp" data-delay=".5s">
                  “Overall, I cannot recommend The Gourmet Bistro highly enough.
                  If you're looking for a restaurant that serves delicious,
                  beautifully presented dishes with impeccable service, look no
                  further. I will definitely be returning .
                </p>
                <Link
                  to="/project-details"
                  className="theme-btn wow fadeInUp"
                  data-delay=".5s"
                >
                  Our Success Story{" "}
                  <i className="fa-solid fa-arrow-right-long" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-right-items">
                <div className="feature-image">
                  <motion.img
                    src="img/home-3/01.jpg"
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
                  <div className="content-item">
                    <div className="content">
                      <h5>Years Of</h5>
                      <h3>Experience</h3>
                    </div>
                    <h2>16</h2>
                  </div>
                  <div className="feature-box float-bob-y">
                    <h5>Adam Cruz</h5>
                    <p>
                      Gourmet Bistro highly enough. If you're looking for a
                      restaurant that serves delicious, beautifully
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
