import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
const AboutOne = () => {
  return (
    <section className='about-section section-padding fix'>
      <div className='container'>
        <div className='about-wrapper'>
          <div className='row g-4'>
            <div className='col-lg-6'>
              <div className='about-content'>
                <div className='section-title mb-0'>
                  <span className='sub-title wow fadeInUp'>About Us</span>
                  <h2 className='wow fadeInUp' data-delay='.3s'>
                    <span>O</span>ur goal is to save more lives with your help.
                  </h2>
                </div>
                <p className='text wow fadeInUp' data-delay='.5s'>
                  Swarna Bharat Foundation (Reg.) is a Bengaluru-based
                  charitable, social, cultural, and environmental organization
                  established in 2012 with the vision of creating a stronger,
                  healthier, and more empowered India.
                </p>
                <div className='about-icon-item wow fadeInUp' data-delay='.3s'>
                  <div className='icon'>
                    <img src='/img/home-1/icon/01.svg' alt='img' />
                  </div>
                  <div className='content'>
                    <h4>Our Vision</h4>
                    <p>
                      Swarna Bharat Foundation is a charity organization
                      dedicated to serving humanity with compassion, based in
                      Bengaluru, India. Since its inception over 13 years ago,
                      it has focused on empowering women, supporting children
                      with medical and educational needs, and providing aid to
                      the elderly and orphaned.
                    </p>
                  </div>
                </div>
                <div
                  className='about-icon-item mb-0 wow fadeInUp'
                  data-delay='.5s'>
                  <div className='icon'>
                    <img src='/img/home-1/icon/02.svg' alt='img' />
                  </div>
                  <div className='content'>
                    <h4>Our Mission</h4>
                    <p>
                      The foundation's initiatives, such as the Water for
                      Voiceless initiative and the Kotivriksha project,
                      highlight its commitment to environmental protection.
                      People choose Swarna Bharat Foundation for its holistic
                      approach to social justice, community support, and its
                      role in fostering a healthier, safer society for all
                    </p>
                  </div>
                </div>
                <div className='about-bottom wow fadeInUp' data-delay='.3s'>
                  <Link to='/about' className='theme-btn'>
                    More About Us <i className='fa-solid fa-arrow-right-long' />
                  </Link>
                  {/* <div className='info-item'>
                    <div className='client-image'>
                      <img src='/img/home-1/about/client.png' alt='img' />
                    </div>
                    <div className='info-content'>
                      <h5>James Anderson</h5>
                      <span>Software Engineer</span>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='about-item'>
                <div className='about-image'>
                  <motion.img
                    // src='/img/home-1/about/about-3.jpg'
                    src='/about-us.jpeg'
                    alt='img'
                    className='wow img-custom-anim-right'
                    initial={{
                      x: '5%',
                      clipPath: 'inset(0 0 0 100%)',
                      opacity: 0,
                    }}
                    whileInView={{
                      x: '0%',
                      clipPath: 'inset(0 0 0 0)',
                      opacity: 1,
                    }}
                    transition={{
                      duration: 1.3,
                      ease: [0.645, 0.045, 0.355, 1],
                      delay: 0.3,
                    }}
                  />
                  <div className='shape'>
                    <img src='/img/home-1/about/shape.png' alt='img' />
                  </div>
                  <div className='about-image-2'>
                    <motion.img
                      // src='/img/home-1/about/about-1.jpg'
                      src='/imgs/WhatsApp Image 2026-09-10 at 12.59.58 PM.jpeg'
                      alt='img'
                      className='wow img-custom-anim-left'
                      initial={{
                        x: '5%',
                        clipPath: 'inset(0 100% 0 0)',
                        opacity: 0,
                      }}
                      whileInView={{
                        x: '0%',
                        clipPath: 'inset(0 0 0 0)',
                        opacity: 1,
                      }}
                      transition={{
                        duration: 1.3,
                        ease: [0.645, 0.045, 0.355, 1],
                        delay: 0.3,
                      }}
                    />
                  </div>
                  <div className='about-image-3'>
                    <motion.img
                      // src='/img/home-1/about/about-2.png'
                      src='/imgs/WhatsApp Image 2026-07-30 at 10.08.23 PM (1).jpeg'
                      alt='img'
                      className='wow img-custom-anim-left'
                      initial={{
                        x: '5%',
                        clipPath: 'inset(0 100% 0 0)',
                        opacity: 0,
                      }}
                      whileInView={{
                        x: '0%',
                        clipPath: 'inset(0 0 0 0)',
                        opacity: 1,
                      }}
                      transition={{
                        duration: 1.3,
                        ease: [0.645, 0.045, 0.355, 1],
                        delay: 0.3,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOne;
