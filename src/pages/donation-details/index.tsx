import PageHeader from "@/components/pageHeader";
import { Link } from "react-router-dom";
import DonationDetailsSideber from "./donationDetailsSideber";
import DonationInput from "./donationInput";

const DonationDetails = () => {
  return (
    <>
      <PageHeader currentPage="Donation Details" title="Donation Details" />
      <section className="donation-details-section section-padding fix">
        <div className="container">
          <div className="donation-details-wrapper">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="donation-details-left">
                  <h3>Honorary Mayor Fundraiser Campaign</h3>
                  <ul className="list">
                    <li>Animals</li>
                    <li className="style-2">By Admin</li>
                    <li className="style-2">July 26,2025</li>
                  </ul>
                  <p>
                    Charity is the act of giving selflessly to those in need,
                    whether through financial aid, resources, or time. It
                    reflects kindness, compassion, and humanity, making the
                    bring hope to the less fortunate.
                  </p>
                  <div className="details-image">
                    <img
                      src="/img/inner-page/donation-details/01.jpg"
                      alt="img"
                    />
                  </div>
                  <h3>Help Children Rise Out Of Probert</h3>
                  <p className="mb-4">
                    Charity is the act of giving selflessly to those in need,
                    whether through financial aid, resources, or time. It
                    reflects kindness, compassion.
                  </p>
                  <h5>Support Where It Counts.</h5>
                  <div className="radius-box">
                    <div className="box-ber">
                      <div className="shape">
                        <img
                          src="/img/inner-page/donation-details/shape.png"
                          alt="img"
                        />
                      </div>
                      <h5>
                        Notice: Test mode is enabled, while in test mode, no live
                        Donations are processed.
                      </h5>
                    </div>
                  </div>
                  <h5>Your Donation:</h5>
                  <DonationInput />
                  <h5>Select Payment Method</h5>
                  <div className="select-item">
                    <label>
                      <input type="radio" name="donation" />
                      Test Donation
                    </label>
                    <label>
                      <input type="radio" name="donation" />
                      Offline Donation
                    </label>
                    <label>
                      <input type="radio" name="donation" defaultChecked />
                      Credit Card
                    </label>
                  </div>
                  <Link to="/donation-details" className="theme-btn">
                    Donte Now <i className="fa-solid fa-arrow-right-long" />
                  </Link>
                  <h3 className="text">Details Information</h3>
                  <form action="#" id="contact-form" method="POST">
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="form-clt">
                          <input
                            type="text"
                            name="name"
                            id="name1"
                            placeholder="First Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-clt">
                          <input
                            type="text"
                            name="name"
                            id="name2"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-clt">
                          <input
                            type="text"
                            name="name"
                            id="email"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-clt">
                          <input
                            type="text"
                            name="subject"
                            id="number"
                            placeholder="Your Number"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-clt">
                          <input
                            type="text"
                            name="email"
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
                      <div className="col-lg-6">
                        <button type="submit" className="theme-btn ">
                          Save Information{" "}
                          <i className="fa-solid fa-arrow-right-long" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6">
                <DonationDetailsSideber />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DonationDetails;
