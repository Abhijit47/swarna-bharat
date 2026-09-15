import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface ServiceType {
  id: number;
  icon: string;
  title: string;
  description: string;
  serviceImg: string;
}

const services: ServiceType[] = [
  {
    id: 1,
    icon: "/img/home-3/icon/03.svg",
    title: "Learning joyfully, laughing all the way",
    description: "Enough If you're looking for a restaurant.",
    serviceImg: "/img/home-3/service/01.jpg",
  },
  {
    id: 2,
    icon: "/img/home-3/icon/04.svg",
    title: "Learning joyfully, laughing all the way",
    description: "Enough If you're looking for a restaurant.",
    serviceImg: "/img/home-3/service/02.jpg",
  },
  {
    id: 3,
    icon: "/img/home-3/icon/05.svg",
    title: "Crafting comedy in every clever class",
    description: "Enough If you're looking for a restaurant.",
    serviceImg: "/img/home-3/service/03.jpg",
  },
  {
    id: 4,
    icon: "/img/home-3/icon/03.svg",
    title: "Learning joyfully, laughing all the way",
    description: "Enough If you're looking for a restaurant.",
    serviceImg: "/img/home-3/service/01.jpg",
  },
  {
    id: 5,
    icon: "/img/home-3/icon/04.svg",
    title: "Learning joyfully, laughing all the way",
    description: "Enough If you're looking for a restaurant.",
    serviceImg: "/img/home-3/service/02.jpg",
  },
  {
    id: 6,
    icon: "/img/home-3/icon/05.svg",
    title: "Crafting comedy in every clever class",
    description: "Enough If you're looking for a restaurant.",
    serviceImg: "/img/home-3/service/03.jpg",
  },
];

const ServicesThree = () => {
  return (
    <section
      className="service-section-3 section-padding fix bg-cover"
      style={{ backgroundImage: "url(/img/home-3/service/bg.jpg)" }}
    >
      <div className="container">
        <div className="section-title-area">
          <div className="section-title style-2">
            <span className="sub-title wow fadeInUp">Our Best Services</span>
            <h2 className="wow fadeInUp" data-delay=".3s">
              <span>E</span>xpert advice for <br /> consulting finance <br />{" "}
              services
            </h2>
          </div>
          <div className="arrow-button">
            <button className="array-prev">
              <i className="fa-solid fa-arrow-left-long" />
            </button>
            <button className="array-next">
              <i className="fa-solid fa-arrow-right-long" />
            </button>
          </div>
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
              slidesPerView: 3,
            },
            991: {
              slidesPerView: 2,
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
          modules={[Autoplay, Navigation]}
          className="service-slider-3"
        >
          {services.map((service, index) => (
            <SwiperSlide key={service.id}>
              <div className="service-card-items-3">
                <div className="service-content">
                  <div className="icon">
                    <img src={service.icon} alt="icon" />
                  </div>
                  <div className="content">
                    <h4>0{index + 1}</h4>
                    <h5>
                      <Link to={"/project-details"}>{service.title}</Link>
                    </h5>
                    <p>{service.description}</p>
                  </div>
                </div>
                <div className="service-image">
                  <img src={service.serviceImg} alt="service" />
                  <Link to={"/service-details"} className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={30}
                      height={30}
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M23.0156 3.66935C4.35751 11.2608 3.60376 27.2925 3.60376 27.2925C3.5822 27.7294 3.91876 28.102 4.35611 28.124C4.79298 28.1461 5.16564 27.809 5.18767 27.3717C5.18767 27.3717 6.02158 11.8373 24.4603 4.80419C23.9995 5.93435 23.4099 6.97451 22.8881 8.07654C22.7011 8.47216 22.8699 8.94513 23.2655 9.13263C23.6611 9.31966 24.1341 9.15044 24.3216 8.75529C24.9024 7.52763 25.5614 6.37216 26.0503 5.09622C26.0995 4.96779 26.4994 3.90044 26.512 3.64544C26.5341 3.2006 26.281 2.98216 26.1244 2.88607C25.5877 2.55654 24.908 2.35638 24.1866 2.23076C23.2669 2.07044 22.2755 2.03154 21.5274 1.88904C21.0975 1.80747 20.6822 2.08966 20.6002 2.51951C20.5186 2.94935 20.8013 3.36513 21.2311 3.44669C21.7458 3.54466 22.3734 3.59622 23.0156 3.66935Z"
                        fill="#0B4E3D"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ServicesThree;
