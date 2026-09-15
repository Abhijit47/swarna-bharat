import { Link } from "react-router-dom";
import ModalVideo from "../modalVideo";

const HeroFullBg = () => {
  return (
    <section
      className="hero-section hero-2 fix bg-cover"
      style={{ backgroundImage: "url(/img/home-2/hero/bg.jpg)" }}
    >
      <div className="left-shape">
        <img src="/img/home-2/hero/shape-2.png" alt="img" />
      </div>
      <div className="right-shape">
        <img src="/img/home-2/hero/shape-3.png" alt="img" />
      </div>
      <div className="left-shape-2">
        <img src="/img/home-2/hero/shape.png" alt="img" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            <div className="hero-content">
              <h4 className="wow fadeInUp">Non - Profit Charity</h4>
              <h1 className="wow fadeInUp" data-delay=".3s">
                Make Someone’s Life By Giving Of Yours's.
              </h1>
              <div className="hero-button-item wow fadeInUp" data-delay=".5s">
                <Link to="/contact" className="theme-btn border-btn">
                  Join With Us <i className="fa-solid fa-arrow-right-long" />
                </Link>
                <span className="button-text">
                  <ModalVideo>
                    <a href="#" className="video-btn ripple video-popup">
                      <i className="fa-solid fa-play" />
                    </a>
                  </ModalVideo>
                  <span className="ms-3">Video Playing Theme</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroFullBg;
