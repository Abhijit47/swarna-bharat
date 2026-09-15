import { motion } from "motion/react";
import { Link } from "react-router-dom";
import ModalVideo from "./modalVideo";

const chooseUsData = [
  {
    id: 1,
    icon: "/img/home-3/icon/06.svg",
    title: "Impact driven initiatives",
    description:
      "Gourmet Bistro highly enough. If you're delicious, beautifully presented dishes with impeccable service.",
  },
  {
    id: 2,
    icon: "/img/home-3/icon/07.svg",
    title: "Global reach local impact",
    description:
      "Gourmet Bistro highly enough. If you're delicious, beautifully presented dishes with impeccable service.",
    active: true,
  },
  {
    id: 3,
    icon: "/img/home-3/icon/08.svg",
    title: "Dedicated volunteers & partners",
    description:
      "Gourmet Bistro highly enough. If you're delicious, beautifully presented dishes with impeccable service.",
  },
  {
    id: 4,
    icon: "/img/home-3/icon/09.svg",
    title: "Event health food for growing",
    description:
      "Gourmet Bistro highly enough. If you're delicious, beautifully presented dishes with impeccable service.",
  },
];

const Choose = () => {
  return (
    <section className="choose-us-section-3 section-padding section-bg-2 fix">
      <div className="top-shape">
        <img src="/img/home-3/feature/shape-2.png" alt="img" />
      </div>
      <div className="left-shape float-bob-y">
        <img src="/img/home-3/feature/love.png" alt="img" />
      </div>
      <div className="right-shape float-bob-y">
        <img src="/img/home-3/feature/love-2.png" alt="img" />
      </div>
      <div className="container">
        <div className="section-title style-2 text-center">
          <span className="sub-title wow fadeInUp">Why Choose Us</span>
          <h2 className="wow fadeInUp" data-delay=".3s">
            <span>W</span>hy trust our kindio ?
          </h2>
        </div>
        <div className="choose-us-wrapper-3">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="choose-us-image">
                <motion.img
                  src="/img/home-3/feature/01.jpg"
                  alt="img"
                  className="wow img-custom-anim-left"
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
                />
                <div className="shape">
                  <img src="/img/home-3/feature/shape.png" alt="img" />
                </div>
                <div className="circle-image">
                  <img src="/img/home-3/feature/02.png" alt="img" />
                  <ModalVideo>
                    <a href="#" className="video-btn video-popup">
                      <i className="fa-solid fa-play" />
                    </a>
                  </ModalVideo>
                </div>
                <div className="content-box float-bob-y">
                  <Link to="/contact" className="arrow-icon">
                    <i className="fa-solid fa-arrow-right-long" />
                  </Link>
                  <h6>
                    Join 1000+ People <br /> Donation
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              {chooseUsData.map((item, index) => {
                const delay = `${0.3 + index * 0.2}s`;

                return (
                  <div
                    key={item.id}
                    className={`choose-us-box wow fadeInUp ${
                      item.active ? "active-box" : ""
                    } `}
                    data-delay={delay}
                  >
                    <div className="icon">
                      <img src={item.icon} alt={item.title} />
                    </div>
                    <div className="content">
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
