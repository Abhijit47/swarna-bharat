import { motion } from "motion/react";

const AboutTwo = ({ className }: { className?: string }) => {
  return (
    <section className={`about-section section-padding fix ${className}`}>
      <div className="container">
        <div className="about-wrapper-2">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="about-left-item">
                <div className="section-title style-2 mb-0">
                  <span className="sub-title wow fadeInUp">About Us</span>
                  <h2 className="wow fadeInUp" data-delay=".3s">
                    <span>B</span>uilding futures one step at a time celebrating
                    the wonder <br /> of childhood.
                  </h2>
                </div>
                <p className="text wow fadeInUp" data-delay=".5s">
                  “Overall, I cannot recommend The Gourmet Bistro highly enough.
                  If you're looking for a restaurant that serves delicious,
                  beautifully presented dishes with impeccable service, look no
                  further.
                </p>
                <motion.div
                  className="about-image wow "
                  initial={{
                    x: "5%",
                    clipPath: "inset(0 100% 0 0)",
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
                  <img src="/img/home-2/about/01.jpg" alt="img" />
                </motion.div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about-right-item">
                <motion.div
                  className="about-image wow "
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
                  <img src="/img/home-2/about/02.jpg" alt="img" />
                </motion.div>
                <div className="about-icon-main-item">
                  <div className="about-icon-item">
                    <div className="icon-item wow fadeInUp" data-delay=".3s">
                      <div className="icon">
                        <img src="/img/home-2/icon/01.svg" alt="img" />
                      </div>
                      <div className="content">
                        <h5>Healthy Food</h5>
                        <p>Impeccable service, look no further.</p>
                      </div>
                    </div>
                    <div className="icon-item wow fadeInUp" data-delay=".5s">
                      <div className="icon">
                        <img src="/img/home-2/icon/01.svg" alt="img" />
                      </div>
                      <div className="content">
                        <h5>Medical Help</h5>
                        <p>Impeccable service, look no further.</p>
                      </div>
                    </div>
                  </div>
                  <div className="about-icon-item mb-0">
                    <div className="icon-item wow fadeInUp" data-delay=".3s">
                      <div className="icon">
                        <img src="/img/home-2/icon/03.svg" alt="img" />
                      </div>
                      <div className="content">
                        <h5>Responsibilities</h5>
                        <p>Impeccable service, look no further.</p>
                      </div>
                    </div>
                    <div className="icon-item wow fadeInUp" data-delay=".5s">
                      <div className="icon">
                        <img src="/img/home-2/icon/04.svg" alt="img" />
                      </div>
                      <div className="content">
                        <h5>Community</h5>
                        <p>Impeccable service, look no further.</p>
                      </div>
                    </div>
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

export default AboutTwo;
