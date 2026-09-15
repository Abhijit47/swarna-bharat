import { Link } from "react-router-dom";

const Feature = () => {
  return (
    <section
      className="feature-skill section-padding fix bg-cover"
      style={{ backgroundImage: "url(/img/inner-page/bg.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="feature-skill-content">
              <h6 className="wow fadeInUp">Each Drop Creates The Sea</h6>
              <h2 className="wow fadeInUp" data-delay=".3s">
                A concrete help for the causes
              </h2>
              <p className="wow fadeInUp" data-delay=".5s">
                Charity is the act of giving selflessly to those in need,
                whether through humanity, making the bring hope to the less
                fortunate.
              </p>
              <div className="progress-area">
                <div className="progress-wrap">
                  <div className="pro-items wow fadeInUp" data-delay=".3s">
                    <div className="pro-head">
                      <h6 className="title">Donation Collection</h6>
                      <span className="point">90%</span>
                    </div>
                    <div className="progress">
                      <div className="progress-value" />
                    </div>
                  </div>
                  <div className="pro-items wow fadeInUp" data-delay=".5s">
                    <div className="pro-head">
                      <h6 className="title">Successful Events</h6>
                      <span className="point">70%</span>
                    </div>
                    <div className="progress">
                      <div className="progress-value style-two" />
                    </div>
                  </div>
                </div>
              </div>
              <Link
                to="/contact"
                className="theme-btn wow fadeInUp"
                data-delay=".3s"
              >
                More Info Later <i className="fa-solid fa-arrow-right-long" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
