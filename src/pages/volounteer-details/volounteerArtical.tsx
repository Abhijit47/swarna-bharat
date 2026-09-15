import { Link } from "react-router-dom";

const VolounteerArtical = () => {
  return (
    <section className="volounteer-details-section section-padding fix">
      <div className="container">
        <div className="volounteer-details-wrapper">
          <div className="row g-4">
            <div className="col-lg-5">
              <div className="volounteer-details-left-item">
                <div className="details-image">
                  <img src="/img/inner-page/volounteer/09.jpg" alt="img" />
                </div>
                <ul className="details-list">
                  <li>
                    Birthday : <span>September 28, 1986</span>
                  </li>
                  <li>
                    Location : <span>Poland</span>
                  </li>
                  <li>
                    Email :{" "}
                    <a href="mailto:ivansch@gmail.com">ivansch@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="volounteer-details-box">
                <h3>Barak Henk</h3>
                <span>Volunteer</span>
                <div className="social-icon">
                  <a href="#">
                    <i className="fa-brands fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-whatsapp" />
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-youtube" />
                  </a>
                </div>
                <p>
                  Services to help the less fortunate, promote education,
                  provide healthcare, and respond to emergencies. Charitable
                  efforts not only uplift individuals and communities but also
                  foster a sense of unity, empathy, and social responsibility.
                </p>
                <h5>I Help My Clients Stand Our And They Help Me Grow</h5>
                <div className="progress-area">
                  <div className="progress-wrap">
                    <div className="pro-items">
                      <div className="pro-head">
                        <h6 className="title">Donation Collection</h6>
                        <span className="point">90%</span>
                      </div>
                      <div className="progress">
                        <div className="progress-value" />
                      </div>
                    </div>
                    <div className="pro-items">
                      <div className="pro-head">
                        <h6 className="title">Successful Events</h6>
                        <span className="point">95%</span>
                      </div>
                      <div className="progress">
                        <div className="progress-value style-two" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list-item">
                  <ul className="list">
                    <li>
                      <i className="fa-solid fa-check-double" />
                      Hope Changing Lives
                    </li>
                    <li>
                      <i className="fa-solid fa-check-double" />
                      Healing Communities
                    </li>
                  </ul>
                  <ul className="list">
                    <li>
                      <i className="fa-solid fa-check-double" />
                      Best Quality Services
                    </li>
                    <li>
                      <i className="fa-solid fa-check-double" />
                      Meet The Deadlines
                    </li>
                  </ul>
                </div>
                <Link to="/donation-details" className="theme-btn">
                  Donate With Me <i className="fa-solid fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <h3>Personal Experience</h3>
        <p className="mt-4">
          Charity is a powerful act of kindness and compassion that aims to
          support those in need and improve the well-being of society. It
          involves giving time, money, resources, or services to help the less
          fortunate, promote education, provide healthcare, and respond to
          emergencies. Charitable efforts not only uplift individuals and
          communities but also foster a sense of is unity, empathy, and social
          responsibility. Whether through small acts or large-scale initiatives.
        </p>
      </div>
    </section>
  );
};

export default VolounteerArtical;
