const TopHeader = () => {
  return (
    <div className='header-top-section'>
      <div className='container-fluid'>
        <div className='header-top-wrapper'>
          <div className='icon-items'>
            <div className='icon'>
              <i className='fa-regular fa-location-dot' />
            </div>
            <div className='content'>
              <span>Our Address</span>
              <h5>Bengaluru, Karnataka, India</h5>
            </div>
          </div>
          <div className='icon-items'>
            <div className='icon'>
              <i className='fa-solid fa-phone-volume' />
            </div>
            <div className='content'>
              <span>Call Us</span>
              <h5>
                <a
                  href='tel:+919845732329'
                  target='_blank'
                  rel='noopener noreferrer'>
                  +919845732329
                </a>
              </h5>
            </div>
          </div>
          <div className='icon-items'>
            <div className='icon'>
              <i className='fa-regular fa-envelope' />
            </div>
            <div className='content'>
              <span>Email</span>
              <h4>
                <a
                  href='mailto:info.swarnabharat@gmail.com'
                  target='_blank'
                  rel='noopener noreferrer'>
                  info.swarnabharat@gmail.com
                </a>
              </h4>
            </div>
          </div>
          <div className='social-icon'>
            {/* <a href='#' title='twitter'>
              <i className='fa-brands fa-twitter' />
            </a> */}
            <a
              href='https://wa.link/uh5dx5'
              target='_blank'
              rel='noopener noreferrer'
              title='facebook'>
              <i className='fa-brands fa-whatsapp' />
            </a>
            {/* <a href='#' title='instagram'>
              <i className='fa-brands fa-instagram' />
            </a>
            <a href='#' title='youtube'>
              <i className='fa-brands fa-youtube' />
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
