import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ServicesData = [
  {
    img: "/img/home-2/service/01.png",
    title: "Medical Lab",
    description:
      "“Overall, I cannot recommend The Gourmet Bistro highly enough. If you're looking for a restaurant that serves delicious.",
  },
  {
    img: "/img/home-2/service/02.png",
    title: "Education",
    description:
      "“Overall, I cannot recommend The Gourmet Bistro highly enough. If you're looking for a restaurant that serves delicious.",
  },
  {
    img: "/img/home-2/service/03.png",
    title: "Homeless",
    description:
      "“Overall, I cannot recommend The Gourmet Bistro highly enough. If you're looking for a restaurant that serves delicious.",
  },
  {
    img: "/img/home-2/service/04.png",
    title: "Food & Nutrition",
    description:
      "“Overall, I cannot recommend The Gourmet Bistro highly enough. If you're looking for a restaurant that serves delicious.",
  },
  {
    img: "/img/home-2/service/01.png",
    title: "Medical Lab",
    description:
      "“Overall, I cannot recommend The Gourmet Bistro highly enough. If you're looking for a restaurant that serves delicious.",
  },
  {
    img: "/img/home-2/service/02.png",
    title: "Education",
    description:
      "“Overall, I cannot recommend The Gourmet Bistro highly enough. If you're looking for a restaurant that serves delicious.",
  },
  {
    img: "/img/home-2/service/03.png",
    title: "Homeless",
    description:
      "“Overall, I cannot recommend The Gourmet Bistro highly enough. If you're looking for a restaurant that serves delicious.",
  },
  {
    img: "/img/home-2/service/04.png",
    title: "Food & Nutrition",
    description:
      "“Overall, I cannot recommend The Gourmet Bistro highly enough. If you're looking for a restaurant that serves delicious.",
  },
];

const ServicesTwo = () => {
  return (
    <section className="causes-section-2 fix section-bg-1 section-padding">
      <div className="left-shape">
        <img src="/img/home-2/service/shape.png" alt="img" />
      </div>
      <div className="container">
        <div className="section-title style-2 text-center">
          <span className="sub-title wow fadeInUp">Our Causes</span>
          <h2 className="wow fadeInUp" data-delay=".3s">
            <span>E</span>xploring possibilities <br /> igniting passions
            
          </h2>
        </div>
      </div>
      <div className="container-fluid">
        <div className="arrow-button">
          <button className="array-prev">
            <i className="fa-solid fa-arrow-left-long" />
          </button>
          <button className="array-next">
            <i className="fa-solid fa-arrow-right-long" />
          </button>
        </div>
        <Swiper
          spaceBetween={30}
          speed={1300}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".array-prev",
            prevEl: ".array-next",
          }}
          breakpoints={{
            1199: {
              slidesPerView: 4,
            },
            991: {
              slidesPerView: 3,
            },
            767: {
              slidesPerView: 2,
            },
            575: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
          modules={[Navigation, Autoplay]}
          className="causes-slider"
        >
          {ServicesData.map((cause, idx) => (
            <SwiperSlide key={idx}>
              <div className="causes-card-items-2">
                <div className="causes-image">
                  <img src={cause.img} alt="img" />
                  <div className="causes-content">
                    <h3>
                      <Link to={"/project-details"}>{cause.title}</Link>
                    </h3>
                    <div className="content">
                      <p>{cause.description}</p>
                      <Link to={"/project-details"} className="link-btn">
                        Join With Us{" "}
                        <i className="fa-solid fa-arrow-right-long" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="causes-button">
          <Link to="/project-details" className="theme-btn">
            Discover More <i className="fa-solid fa-arrow-right-long" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesTwo;
