import { Link } from "react-router-dom";

const ContactFormOne = () => {
  return (
    <section className="contact-us-section section-padding fix section-bg-2">
      <div className="container">
        <div className="contact-us-wrapper">
          <div className="row g-4">
            <div className="col-lg-5">
              <div className="contact-us-content">
                <div className="section-title mb-0">
                  <span className="sub-title wow fadeInUp">Contact Us</span>
                  <h2 className="wow fadeInUp" data-delay=".3s">
                    <span>H</span>ave a project in mind? Contact with us
                  </h2>
                </div>
                <p className="text wow fadeInUp" data-delay=".5s">
                  Construction is a broad field that involves the process of
                  building, properties. It encompasses various types of
                  projects, including residential, commercial, and industrial.
                </p>
                <Link
                  to="/contact"
                  className="theme-btn wow fadeInUp"
                  data-delay=".3s"
                >
                  Contact Us <i className="fa-solid fa-arrow-right-long" />
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="contact-us-item">
                <form action="#" id="contact-form" method="#">
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="name"
                          id="name2"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="email"
                          id="email"
                          placeholder="Enter Your Email"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="address"
                          id="address"
                          placeholder="Your Address"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Type your message"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormOne;
