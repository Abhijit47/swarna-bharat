const EventDetailsSidebar = () => {
  return (
    <div className="event-main-sideber">
      <div className="event-sideber-box">
        <div className="client-image">
          <img src="/img/inner-page/event-details/user.png" alt="img" />
        </div>
        <div className="user-content">
          <h5>Dianne Russell</h5>
          <span>Medical Assistant</span>
          <p>
            Adipiscing sed do tempor incididunt ut labore et dolore magna
            aliqua. Ut enim minim dolor in reprehenderit.
          </p>
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
      <div className="event-info-box">
        <h3>Event Info</h3>
        <div className="info-item">
          <div className="icon">
            <i className="fa-regular fa-location-dot" />
          </div>
          <div className="content">
            <h6>Location:</h6>
            <span>3891 Ranchview California 62639</span>
          </div>
        </div>
        <div className="info-item">
          <div className="icon">
            <i className="fa-regular fa-clock" />
          </div>
          <div className="content">
            <h6>Event Time:</h6>
            <span>09:00 PM - 04:00 AM</span>
          </div>
        </div>
        <div className="info-item mb-0">
          <div className="icon">
            <i className="fa-regular fa-calendar-days" />
          </div>
          <div className="content">
            <h6>Event Date:</h6>
            <span>Event Date:</span>
          </div>
        </div>
      </div>
      <div className="event-contact-box">
        <div className="icon">
          <i className="fa-regular fa-phone" />
        </div>
        <h5>Need Help? Call Here</h5>
        <h6>
          <a href="tel:+16336547896">+163 3654 7896</a>
        </h6>
        <a href="#" className="theme-btn">
          BOOK NOW <i className="fa-solid fa-arrow-right-long" />
        </a>
      </div>
    </div>
  );
};

export default EventDetailsSidebar;
