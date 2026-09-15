import { Link } from 'react-router-dom';
const quickLinks = [
  { name: 'About US', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Gallery', path: '/contact' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Blog', path: '/news-details' },
];

const exploreNow = [
  { name: 'Volounteer', path: '/volounteer-details' },
  { name: 'Project', path: '/project-details' },
  { name: 'Event', path: '/event-details' },
  { name: 'Causes', path: '/project-details' },
];

const supports = [
  { name: 'Domination', path: '/donation-details' },
  { name: 'Forums', path: '/news' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Support Policy', path: '/contact' },
];
const FooterOne = () => {
  return (
    <footer className='footer-section header-bg fix'>
      <div className='container'>
        <div className='footer-widget-wrapper'>
          <div className='row g-4 justify-content-between'>
            <div
              className='col-xl-2 col-md-6 col-lg-2 wow fadeInUp'
              data-delay='.2s'>
              <div className='single-footer-widget'>
                <div className='wid-title'>
                  <h3>Quick Links</h3>
                </div>
                <ul className='list-area'>
                  {quickLinks.map(({ name, path }) => (
                    <li key={name}>
                      <Link to={path}>
                        <i className='fa-solid fa-chevrons-right' /> {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className='col-xl-3 col-md-6 col-lg-3 ps-lg-5 wow fadeInUp'
              data-delay='.4s'>
              <div className='single-footer-widget'>
                <div className='wid-title'>
                  <h3>Explore Now</h3>
                </div>
                <ul className='list-area'>
                  {exploreNow.map(({ name, path }) => (
                    <li key={name}>
                      <Link to={path}>
                        <i className='fa-solid fa-chevrons-right' /> {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className='col-xl-2 col-md-6 col-lg-2 wow fadeInUp'
              data-delay='.6s'>
              <div className='single-footer-widget'>
                <div className='wid-title'>
                  <h3>Supports</h3>
                </div>
                <ul className='list-area'>
                  {supports.map(({ name, path }) => (
                    <li key={name}>
                      <Link to={path}>
                        <i className='fa-solid fa-chevrons-right' /> {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* <div
              className='col-xl-5 col-md-6 col-lg-5 ps-lg-5 wow fadeInUp'
              data-delay='.8s'>
              <div className='single-footer-widget'>
                <div className='wid-title'>
                  <h3>Newsletter</h3>
                </div>
                <div className='footer-newsletter'>
                  <p>
                    Charity not only helps to reduce suffering but also fosters
                    a sense of unity and shared responsibility in society.
                  </p>
                  <form action='#'>
                    <div className='form-clt'>
                      <input
                        type='text'
                        name='email'
                        id='email'
                        placeholder='Enter Your Email'
                      />
                      <button type='submit' className='theme-btn'>
                        Subscribe Now
                      </button>
                    </div>
                  </form>
                  <div className='social-icon'>
                    <Link to='#'>
                      <i className='fa-brands fa-twitter' />
                    </Link>
                    <Link to='#'>
                      <i className='fa-brands fa-whatsapp' />
                    </Link>
                    <Link to='#'>
                      <i className='fa-brands fa-instagram' />
                    </Link>
                    <Link to='#'>
                      <i className='fa-brands fa-youtube' />
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='footer-wrapper'>
            <p>
              Copyright &amp; Design By <span>@Swarna Bharat Foundation</span>
            </p>
            <ul className='footer-bottom-list'>
              <li>
                <Link to='/faq'>Faq</Link>
              </li>
              <li>
                <Link to='/contact'>Careers</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
