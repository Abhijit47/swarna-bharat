import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCount from "./testimonialCount";

interface TestimonialType {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
}

const testimonialData: TestimonialType[] = [
  {
    id: 1,
    name: "Cameron Williamson",
    role: "Regular Customer’s",
    text: "Communities but also foster a sense of unity, empathy, and social responsibility. Whether through small acts or large-scale initiatives, charity plays a crucial role in building a more just and compassionate world.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Cooper",
    role: "Donor",
    text: "Charity work helps bring people together, supporting those in need while inspiring others to give back. It creates stronger and more caring communities.",
    rating: 5,
  },
  {
    id: 3,
    name: "Robert Fox",
    role: "Volunteer",
    text: "Being part of a charitable cause has changed the way I see the world. It’s not just about giving, it’s about sharing kindness and hope.",
    rating: 4,
  },
];

const TestimonialThree = () => {
  return (
    <section className="testimonial-section-3 section-padding fix">
      <div className="container">
        <div className="testimonial-wrapper-3">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="testimonial-item-3">
                <div className="testimonial-image">
                  <img src="/img/home-3/testi-1.jpg" alt="img" />
                </div>
                <div className="testimonial-box">
                  <div className="array-button">
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
                    loop
                    centeredSlides={true}
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
                        slidesPerView: 1,
                      },
                      991: {
                        slidesPerView: 1,
                      },
                      767: {
                        slidesPerView: 1,
                      },
                      575: {
                        slidesPerView: 1,
                      },
                      0: {
                        slidesPerView: 1,
                      },
                    }}
                    modules={[Navigation, Autoplay]}
                    className="testimonial-slider-2"
                  >
                    {testimonialData.map((item) => (
                      <SwiperSlide key={item.id}>
                        <div className="testimonial-content">
                          <div className="star">
                            {Array.from({ length: item.rating }).map((_, i) => (
                              <i key={i} className="fa-solid fa-star" />
                            ))}
                          </div>
                          <p>{item.text}</p>
                          <h4>{item.name}</h4>
                          <span>{item.role}</span>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-content">
                <div className="section-title style-2 mb-0">
                  <span className="sub-title wow fadeInUp">testimonials</span>
                  <h2 className="wow fadeInUp" data-delay=".3s">
                    <span>L</span>ifelong lessons stories from our elders
                  </h2>
                </div>
                <p className="text wow fadeInUp" data-delay=".5s">
                  “Overall, I cannot recommend The Gourmet Bistro highly enough.
                  If you're looking for a restaurant that serves delicious,
                  beautifully presented dishes with impeccable service, look no
                  further. I will definitely be returning .
                </p>
                <Link
                  to="/contact"
                  className="theme-btn wow fadeInUp"
                  data-delay=".5s"
                >
                  Learn More <i className="fa-solid fa-arrow-right-long" />
                </Link>
                <TestimonialCount />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialThree;
