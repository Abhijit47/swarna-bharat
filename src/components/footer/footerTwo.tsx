import { Link } from "react-router-dom";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const quickLinks = [
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Gallery", path: "/contact" },
  { name: "FAQ", path: "/faq" },
  { name: "Blog", path: "/news-details" },
];

const exploreNow = [
  { name: "Volounteer", path: "/volounteer-details" },
  { name: "Project", path: "/project-details" },
  { name: "Event", path: "/event-details" },
  { name: "Causes", path: "/project-details" },
];
const instagramData = [
  {
    id: 1,
    img: "/img/home-2/instagram/01.jpg",
    link: "https://instagram.com",
  },
  { id: 2, img: "/img/home-2/instagram/02.jpg", link: "https://instagram.com" },
  { id: 3, img: "/img/home-2/instagram/03.jpg", link: "https://instagram.com" },
  { id: 4, img: "/img/home-2/instagram/04.jpg", link: "https://instagram.com" },
  { id: 5, img: "/img/home-2/instagram/05.jpg", link: "https://instagram.com" },
  { id: 6, img: "/img/home-2/instagram/01.jpg", link: "https://instagram.com" },
  { id: 7, img: "/img/home-2/instagram/02.jpg", link: "https://instagram.com" },
  { id: 8, img: "/img/home-2/instagram/03.jpg", link: "https://instagram.com" },
  { id: 9, img: "/img/home-2/instagram/04.jpg", link: "https://instagram.com" },
  {
    id: 10,
    img: "/img/home-2/instagram/05.jpg",
    link: "https://instagram.com",
  },
];

const FooterTwo = () => {
  return (
    <footer className="footer-section-2 footer-bg-2 fix">
      <div className="left-shape float-bob-y">
        <img src="/img/home-2/cta/love.png" alt="img" />
      </div>
      <div className="right-shape float-bob-x">
        <img src="/img/home-2/cta/love-2.png" alt="img" />
      </div>
      <div className="container">
        <div className="footer-widget-wrapper style-2">
          <div className="row g-4 justify-content-between">
            <div
              className="col-xl-4 col-md-6 col-lg-4 wow fadeInUp"
              data-delay=".6s"
            >
              <div className="single-footer-widget">
                <div className="footer-left-content">
                  <Link to="/">
                    <img src="/img/logo/white-logo.png" alt="img" />
                  </Link>
                  <p>
                    Charity not only helps to reduce suffering but also fosters
                    a sense of unity and shared responsibility in society It
                    reminds us of the can make it.
                  </p>
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
            <div
              className="col-xl-3 col-md-6 col-lg-3 ps-lg-5 wow fadeInUp"
              data-delay=".2s"
            >
              <div className="single-footer-widget">
                <div className="wid-title">
                  <h3>Quick Links</h3>
                </div>
                <ul className="list-area">
                  {quickLinks.map(({ name, path }) => (
                    <li key={name}>
                      <Link to={path}>
                        <i className="fa-solid fa-chevrons-right" /> {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className="col-xl-2 col-md-6 col-lg-2  wow fadeInUp"
              data-delay=".4s"
            >
              <div className="single-footer-widget">
                <div className="wid-title">
                  <h3>Explore Now</h3>
                </div>
                <ul className="list-area">
                  {exploreNow.map(({ name, path }) => (
                    <li key={name}>
                      <Link to={path}>
                        <i className="fa-solid fa-chevrons-right" /> {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-md-6 col-lg-3 ps-xl-5 ps-lg-0 wow fadeInUp"
              data-delay=".8s"
            >
              <div className="single-footer-widget">
                <div className="wid-title">
                  <h3>Contact Us</h3>
                </div>
                <div className="footer-right-contact">
                  <ul className="list">
                    <li>
                      <i className="fa-solid fa-phone-volume" />
                      <Link to="tel:+1234567879967">+123 456 7879 967</Link>
                    </li>
                    <li>
                      <i className="fa-regular fa-envelope" />
                      <Link to="mailto:example@gmail.com">
                        example@gmail.com
                      </Link>
                    </li>
                    <li>
                      <i className="fa-regular fa-location-dot" />
                      No: Airway Heights, Washington <br /> PO Box 1243
                    </li>
                  </ul>
                  <div className="social-icon">
                    <Link to="#">
                      <i className="fa-brands fa-twitter" />
                    </Link>
                    <Link to="#">
                      <i className="fa-brands fa-whatsapp" />
                    </Link>
                    <Link to="#">
                      <i className="fa-brands fa-instagram" />
                    </Link>
                    <Link to="#">
                      <i className="fas fa-paper-plane" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Swiper
        spaceBetween={0}
        speed={2000}
        loop
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          1399: {
            slidesPerView: 5,
          },
          1199: {
            slidesPerView: 5,
          },
          991: {
            slidesPerView: 4,
          },
          767: {
            slidesPerView: 3,
          },
          650: {
            slidesPerView: 2,
          },
          575: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        modules={[Autoplay]}
        className="instagram-banner-slider"
      >
        {instagramData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="banner-image">
              <img src={item.img} alt="insta-img" />
              <Link
                to={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <i className="fa-brands fa-instagram" />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="footer-bottom style-2">
        <div className="container">
          <div className="footer-wrapper">
            <p>
              Copyright &amp; Design By <span>@Kindio</span>
            </p>
            <ul className="footer-bottom-list">
              <li>
                <Link to="/faq">Faq</Link>
              </li>
              <li>
                <Link to="/contact">Careers</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
