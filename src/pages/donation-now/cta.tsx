import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <section
      className="cta-bg-section-4 section-padding bg-cover"
      style={{ backgroundImage: "url(/img/inner-page/cta-bg.jpg)" }}
    >
      <div className="container">
        <div className="cta-bg-wrapper-4">
          <div className="cta-content wow fadeInUp" data-delay=".3s">
            <h3>Write Us More Information On Danations</h3>
            <p>
              Charity is the giving selflessly to those in need, whether through
              humanity, making the bring hope to the fortunate.
            </p>
          </div>
          <Link
            to="/contact"
            className="theme-btn wow fadeInUp"
            data-delay=".3s"
          >
            Downloads Now <i className="fa-solid fa-arrow-right-long" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
