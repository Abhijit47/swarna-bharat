import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ModalVideo from "../modalVideo";

const HeroHalfSlider = () => {
  const heroImages = [
    "/img/home-3/hero/01.png",
    "/img/home-3/hero/01.png",
    "/img/home-3/hero/01.png",
  ];

  return (
    <section
      className="hero-section hero-3 fix bg-cover"
      style={{ backgroundImage: "url(/img/home-3/hero/bg.jpg)" }}
    >
      <div className="right-shape">
        <img src="/img/home-3/hero/shape-3.png" alt="img" />
      </div>
      <div className="left-shape">
        <img src="/img/home-3/hero/shape-4.png" alt="img" />
      </div>
      <div className="box float-bob-y">
        <div className="icon">
          <img src="/img/home-3/icon/11.svg" alt="img" />
        </div>
        <div className="content">
          <h6>Exchange Finance</h6>
          <span>&amp;552.99</span>
        </div>
      </div>
      <div className="shape-1">
        <img src="/img/home-3/hero/shape.png" alt="img" />
      </div>
      <div className="shape-2">
        <img src="/img/home-3/hero/shape-2.png" alt="img" />
      </div>
      <div className="container-fluid">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <div className="hero-content">
              <h6 className="wow fadeInUp">Together We Create Impact </h6>
              <h1 className="wow fadeInUp" data-delay=".3s">
                Education changes the <span>world - support</span> education.
              </h1>
              <p className="wow fadeInUp" data-delay=".5s">
                Overall, I cannot recommend The Gourmet Bistro highly enough. If
                you're looking for a restaurant that serves delicious,
                beautifully presented dishes with impeccable service.
              </p>
              <div className="hero-button-item wow fadeInUp" data-delay=".3s">
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
          <div className="col-lg-6">
            <Swiper
              spaceBetween={30}
              speed={2000}
              loop
              pagination={{
                el: ".dot",
                clickable: true,
              }}
              autoplay={{
                delay: 1,
                disableOnInteraction: true,
              }}
              modules={[Autoplay, Pagination]}
              className="hero-image-slider"
            >
              {heroImages.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="hero-image">
                    <img src={src} alt={`hero-${index}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-dot-2">
              <div className="dot" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHalfSlider;
