import { Link } from "react-router-dom";

const testimonials = [
  {
    stars: 5,
    quote:
      "It reflects compassion and empathy, aiming to reduce suffering and improve lives. True charity is selfless—it comes from a genuine desire to make a difference.",
    image: "/img/home-2/client-1.png",
    name: "Jenny Wilson",
    role: "Project Manager",
    id: "s1",
    labelId: "slide1",
    checked: true,
  },
  {
    stars: 5,
    quote:
      "Charity involves giving without expecting anything in return. It builds a better world by helping those who need it the most, especially during crises.",
    image: "/img/home-2/client-2.png",
    name: "John Doe",
    role: "Team Lead",
    id: "s2",
    labelId: "slide2",
    checked: false,
  },
  {
    stars: 5,
    quote:
      "Giving back to society strengthens communities. Even the smallest act of kindness can bring hope and change lives in extraordinary ways.",
    image: "/img/home-2/client-3.png",
    name: "Sarah Lee",
    role: "Volunteer",
    id: "s3",
    labelId: "slide3",
    checked: false,
  },
];

const Star = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={35}
      viewBox="0 0 40 35"
      fill="none"
    >
      <g opacity="0.2">
        <path d="M0 0V35L15 17.5V0H0Z" fill="#FFC107" />
        <path d="M25 0V35L40 17.5V0H25Z" fill="#FFC107" />
      </g>
    </svg>
  );
};

const TestimonialTwo = () => {
  return (
    <section className="testimonial-section-2 section-padding pb-0">
      <div className="container">
        <div className="testimonial-wrapper-2">
          <div className="row g-4 align-items-center">
            <div className="col-lg-5">
              <div className="testimonial-content">
                <div className="section-title style-2 mb-0">
                  <span className="sub-title wow fadeInUp">Testimonials</span>
                  <h2 className="wow fadeInUp" data-delay=".3s">
                    <span>H</span>appy Clients <br /> Reflect On Their Journey
                    With Us.
                  </h2>
                </div>
                <p className="text wow fadeInUp" data-delay=".5s">
                  Overall, I cannot recommend The Gourmet Bistro highly enough.
                  If you're looking for a restaurant that serves delicious,
                  beautifully presented dishes with impeccable service, look no
                  further.
                </p>
                <Link to="/contact" className="theme-btn">
                  More Details <i className="fa-solid fa-arrow-right-long" />
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="testimonial-items">
                <section id="slider">
                  {testimonials.map((item) => (
                    <input
                      type="radio"
                      name="slider"
                      id={item.id}
                      defaultChecked={item.checked}
                      key={item.id}
                    />
                  ))}
                  {testimonials.map((item) => (
                    <label
                      htmlFor={item.id}
                      id={item.labelId}
                      key={item.labelId}
                    >
                      <div className="testimonial-box">
                        <div className="top-item">
                          <div className="star">
                            {[...Array(item.stars)].map((_, i) => (
                              <i key={i} className="fa-solid fa-star" />
                            ))}
                          </div>
                          <Star />
                        </div>
                        <p>{item.quote}</p>
                        <div className="client-info">
                          <div className="client-image">
                            <img src={item.image} alt="img" />
                          </div>
                          <div className="content">
                            <h5>{item.name}</h5>
                            <span>{item.role}</span>
                          </div>
                        </div>
                      </div>
                    </label>
                  ))}
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialTwo;
