const VolunteerFrom = () => {
  return (
    <div className="from-box">
      <h3>Fill Up The From</h3>
      <p>
        Charity is the act of giving selflessly to those in need, whether
        through humanity, making the bring hope to the fortunate.
      </p>
      <form action="#" id="contact-form" method="POST">
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
          <div className="col-lg-6">
            <div className="form-clt">
              <input
                type="text"
                name="number"
                id="number"
                placeholder="Phone Number"
              />
            </div>
          </div>
          <div className="col-lg-6">
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
          <div className="col-lg-6">
            <button type="submit" className="theme-btn ">
              Submit Now <i className="fa-solid fa-arrow-right-long" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default VolunteerFrom;
