const TopHeaderTwo = () => {
  return (
    <div className="header-top-section-2">
      <div className="container-fluid">
        <div className="header-top-wrapper-2">
          <div className="header-left">
            <ul className="list-icon">
              <li>
                <i className="fa-regular fa-location-dot" /> 55 Street, 2nd
                Block, Melbourne, Australia
              </li>
              <li>
                <i className="fa-solid fa-envelope" />
                <a href="mailto:Support@example.com"> Support@example.com</a>
              </li>
              <li>
                <i className="fa-solid fa-phone-volume" />
                <a href="tel:+16336547896"> +16336547896</a>
              </li>
            </ul>
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
    </div>
  );
};

export default TopHeaderTwo;
