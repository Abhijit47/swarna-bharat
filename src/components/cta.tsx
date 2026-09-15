import { Link } from "react-router-dom";
import ModalVideo from "./modalVideo";

const Cta = () => {
  return (
    <section
      className="cta-section section-padding pb-0 fix bg-cover"
      style={{ backgroundImage: "url(/img/home-2/cta/bg.png)" }}
    >
      <div className="left-shape float-bob-y">
        <img src="/img/home-2/cta/hand.png" alt="img" />
      </div>
      <div className="love-shape float-bob-x">
        <img src="/img/home-2/cta/love.png" alt="img" />
      </div>
      <div className="top-shape float-bob-x">
        <img src="/img/home-2/cta/love-2.png" alt="img" />
      </div>
      <div className="right-shape float-bob-y">
        <img src="/img/home-2/cta/hand-2.png" alt="img" />
      </div>
      <div className="container">
        <div className="cta-wrapper">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="cta-content">
                <div className="circle-image">
                  <img src="/img/home-2/cta/circle.png" alt="img" />
                  <ModalVideo>
                    <a href="#" className="video-btn video-popup">
                      <i className="fa-solid fa-play" />
                    </a>
                  </ModalVideo>
                </div>
                <div className="section-title style-2 mb-0">
                  <h2 className="text-white wow fadeInUp" data-delay=".3s">
                    <span>O</span>ur door are always open to more to more people
                    who what to <br /> support each other
                  </h2>
                </div>
                <Link
                  to="/contact"
                  className="theme-btn wow fadeInUp"
                  data-delay=".3s"
                >
                  Get Involved <i className="fa-solid fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
