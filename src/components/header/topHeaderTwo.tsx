const TopHeaderTwo = () => {
  return (
    <div className='header-top-section-2'>
      <div className='container-fluid'>
        <div className='header-top-wrapper-2'>
          <div className='header-left'>
            <ul className='list-icon'>
              <li>
                <i className='fa-regular fa-location-dot' />
                Bengaluru, Karnataka, India
              </li>
              <li>
                <i className='fa-solid fa-envelope' />
                <a href='mailto:Support@example.com'>
                  info.swarnabharat@gmail.com
                </a>
              </li>
              <li>
                <i className='fa-solid fa-phone-volume' />
                <a href='tel:+919845732329'>+919845732329</a>
              </li>
            </ul>
          </div>
          <div className='social-icon'>
            <a href='#' title='Twitter'>
              <i className='fa-brands fa-twitter' />
            </a>
            <a href='#' title='Whatsapp'>
              <i className='fa-brands fa-whatsapp' />
            </a>
            <a href='#' title='Instagram'>
              <i className='fa-brands fa-instagram' />
            </a>
            <a href='#' title='Youtube'>
              <i className='fa-brands fa-youtube' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeaderTwo;
