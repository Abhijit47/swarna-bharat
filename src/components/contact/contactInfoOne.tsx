import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
const ContactInfoOne = () => {
  return (
    <section className='contact-section section-padding pb-0'>
      <div className='container-fluid'>
        <div className='contact-wrapper'>
          <div className='row g-4 align-items-end'>
            <div className='col-lg-6'>
              <motion.div
                className='contact-image'
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{
                  duration: 1.3,
                  ease: [0.645, 0.045, 0.355, 1],
                  delay: 0.3,
                }}
                viewport={{ once: false, amount: 0.2 }}>
                <img src='/img/home-1/contact.jpg' alt='img' />
              </motion.div>
            </div>
            <div className='col-lg-6'>
              <div className='contact-content'>
                <div className='logo-image'>
                  <Link to='/' className={'d-block'}>
                    {/* <img src='/img/logo/white-logo.png' alt='img' /> */}
                    <img
                      src='/logo.jpeg'
                      alt='img'
                      width={80}
                      height={80}
                      className={'rounded-circle object-fit-cover'}
                    />
                  </Link>
                </div>
                <div className='section-title mb-0'>
                  <h2 className='sec-title text-white'>
                    <span>A</span>lways open to more people <br /> who what to
                    support each other
                  </h2>
                </div>
                <p className='text wow fadeInUp' data-delay='.3s'>
                  Charity not only helps to reduce suffering but also fosters a
                  sense of unity and shared responsibility in society. It
                  reminds us of the can make it.
                </p>
                <div className='contact-item wow fadeInUp' data-delay='.5s'>
                  <Link to='/contact' className='theme-btn'>
                    Explore More <i className='fa-solid fa-arrow-right-long' />
                  </Link>
                  <h6>
                    <span>Call :</span>
                    <a href='tel:+919845732329'>+91 98457 32329</a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoOne;
