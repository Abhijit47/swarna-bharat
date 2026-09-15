const ContactInfoTwo = () => {
  return (
    <section className="cta-contact-section-2">
      <div className="top-shape">
        <img src="img/home-2/shape.png" alt="img" />
      </div>
      <div className="container">
        <div className="cta-contact-wrapper wow fadeInUp" data-delay=".3s">
          <div className="contact-item">
            <div className="icon">
              <i className="fa-regular fa-location-dot" />
            </div>
            <div className="content">
              <h4>Newyork City, USA</h4>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon">
              <i className="fa-solid fa-phone-volume" />
            </div>
            <div className="content">
              <h6>Call us any time</h6>
              <h4>
                <a href="tel:+16336547896">+163 3654 7896</a>
              </h4>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon">
              <i className="fa-regular fa-envelope" />
            </div>
            <div className="content">
              <h6>Send us a message</h6>
              <h4>
                <a href="mailto:info@donat.com">info@example.com</a>
              </h4>
            </div>
          </div>
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
        </div>
      </div>
    </section>
  );
};

export default ContactInfoTwo;
