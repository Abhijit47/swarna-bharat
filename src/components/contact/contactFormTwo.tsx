const ContactFormTwo = () => {
  return (
    <div className='contact-us-section-2 section-padding fix'>
      <div className='container'>
        <div className='contact-us-wrapper-2'>
          <div className='row g-4'>
            <div className='col-lg-4'>
              <div className='contact-us-box'>
                <div className='icon'>
                  <i className='fa-solid fa-phone' />
                </div>
                <div className='contact-us-content'>
                  <span>Phone No</span>
                  <h5>
                    <a
                      href='tel:+919845732329'
                      target='_blank'
                      rel='noopener noreferrer'>
                      +91 98457 32329
                    </a>{' '}
                    <br />
                    <a
                      href='tel:++919739932329'
                      target='_blank'
                      rel='noopener noreferrer'>
                      +91 97399 32329
                    </a>
                  </h5>
                </div>
              </div>
              <div className='contact-us-box'>
                <div className='icon'>
                  <i className='fa-solid fa-location-dot' />
                </div>
                <div className='contact-us-content'>
                  <span>Location</span>
                  <h5>Bengaluru, Karnataka, India</h5>
                </div>
              </div>
              <div className='contact-us-box mb-0'>
                <div className='icon'>
                  <i className='fa-solid fa-square-chevron-down' />
                </div>
                <div className='contact-us-content'>
                  <span>Email Address</span>
                  <h5>
                    <a
                      href='mailto:info.swarnabharat@gmail.com'
                      target='_blank'
                      rel='noopener noreferrer'>
                      info.swarnabharat@gmail.com
                    </a>
                  </h5>
                </div>
              </div>
            </div>
            <div className='col-lg-8'>
              <div className='from-fill-up-box'>
                <h4>Fill Up The Form</h4>
                <form action='#' id='contact-form' method='POST'>
                  <div className='row g-4'>
                    <div className='col-lg-12'>
                      <div className='form-clt'>
                        <input
                          type='text'
                          name='name'
                          id='name2'
                          placeholder='Your Name'
                        />
                      </div>
                    </div>
                    <div className='col-lg-12'>
                      <div className='form-clt'>
                        <input
                          type='text'
                          name='email'
                          id='email'
                          placeholder='Enter Your Email'
                        />
                      </div>
                    </div>
                    <div className='col-lg-12'>
                      <div className='form-clt'>
                        <input
                          type='text'
                          name='number'
                          id='number'
                          placeholder='Phone Number'
                        />
                      </div>
                    </div>
                    <div className='col-lg-12'>
                      <div className='form-clt'>
                        <input
                          type='text'
                          name='address'
                          id='address'
                          placeholder='Your Address'
                        />
                      </div>
                    </div>
                    <div className='col-lg-12'>
                      <div className='form-clt'>
                        <textarea
                          name='message'
                          id='message'
                          placeholder='Type your message'
                          defaultValue={''}
                        />
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <button type='submit' className='theme-btn '>
                        Get A Quote{' '}
                        <i className='fa-solid fa-arrow-right-long' />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormTwo;
