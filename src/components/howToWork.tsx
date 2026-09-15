import { Link } from "react-router-dom";

interface HowToWorkType {
  id: number;
  img: string;
  title: string;
  description: string;
  reverse?: boolean; // to swap content & image (like 2nd card)
}

const workData: HowToWorkType[] = [
  {
    id: 1,
    img: "img/home-3/donation/01.jpg",
    title: "Choose Your Cause",
    description:
      "“Overall, I cannot recommend The Gourmet Bistro that serves delicious, beautifully presented dishes with impeccable service, look no further.",
  },
  {
    id: 2,
    img: "img/home-3/donation/02.jpg",
    title: "Make A Donation",
    description:
      "“Overall, I cannot recommend The Gourmet Bistro that serves delicious, beautifully presented dishes with impeccable service, look no further.",
    reverse: true, // image after content
  },
  {
    id: 3,
    img: "img/home-3/donation/03.jpg",
    title: "See The Impact",
    description:
      "“Overall, I cannot recommend The Gourmet Bistro that serves delicious, beautifully presented dishes with impeccable service, look no further.",
  },
];

const HowToWork = () => {
  return (
    <section className="donation-section-3 section-padding fix pb-0">
      <div className="container">
        <div className="section-title style-2">
          <span className="sub-title wow fadeInUp">How It Work</span>
          <h2 className="wow fadeInUp" data-delay=".3s">
            <span>M</span>aking an impact step by step
          </h2>
        </div>
        <div className="row">
          {workData.map((item, index) => {
            const delay = `${0.3 + index * 0.2}s`;
            return (
              <div
                key={item.id}
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-delay={delay}
              >
                <div
                  className={`donation-card-items-3 d-flex flex-column ${
                    item.reverse ? "flex-column-reverse" : ""
                  }`}
                  style={{ gap: "20px" }}
                >
                  <div className="donation-image">
                    <img src={item.img} alt={item.title} />
                    <div className="donation-layer-wrapper">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div
                          key={i}
                          className="donation-layer-image"
                          style={{ backgroundImage: `url("${item.img}")` }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="donation-content">
                    <h5>
                      <Link to={"/donation-details"}>{item.title}</Link>
                    </h5>
                    <p>{item.description}</p>
                    <Link to={"/donation-details"} className="link-btn">
                      More Details{" "}
                      <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowToWork;
