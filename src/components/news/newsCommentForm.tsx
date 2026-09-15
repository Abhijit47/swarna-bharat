const NewsCommentForm = () => {
  return (
    <div className="contact-from-box">
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
          <div className="col-lg-6">
            <button type="submit" className="theme-btn ">
              Save Information <i className="fa-solid fa-arrow-right-long" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewsCommentForm;
