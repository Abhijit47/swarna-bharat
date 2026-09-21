import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-flip';
import 'swiper/css/navigation';
import { A11y, Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const slides = [
  {
    subTitle: 'Start Donating to Poor People',
    title: 'We Are Non-Profit Charity Organization',
    description: `   Charity not only helps to reduce suffering but also
                        fosters a sense of unity and shared responsibility in
                        difference in someone's life.`,
    bg: 'url(/banner-hero.png)',
    image: '/banner-hero.png',
  },
  {
    subTitle: 'Start Donating to Poor People',
    title: 'Providing Humanitarian services to all people',
    description: `   Charity not only helps to reduce suffering but also
                        fosters a sense of unity and shared responsibility in
                        difference in someone's life.`,
    bg: 'url(/banner-hero.png)',
    image: '/banner-hero.png',
  },
  {
    subTitle: 'Start Donating to Poor People',
    title: 'We Are Non-Profit Charity Organization',
    description: `   Charity not only helps to reduce suffering but also
                        fosters a sense of unity and shared responsibility in
                        difference in someone's life.`,
    bg: 'url(/banner-hero.png)',
    image: '/banner-hero.png',
  },
];

// const isDev = import.meta.env.DEV;

const HeroSlider = () => {
  const tripleitems = [...slides, ...slides, ...slides];

  return (
    <section className='hero-section-1'>
      {/* <div className='arrow-button'>
        <button className='array-prev' title='left'>
          <i className='fa-light fa-chevron-left' />
        </button>
        <button className='array-next' title='right'>
          <i className='fa-light fa-chevron-right' />
        </button>
      </div> */}
      <Swiper
        // navigation={{
        //   nextEl: '.array-next',
        //   prevEl: '.array-prev',
        // }}
        loop={false}
        freeMode
        rewind
        grabCursor
        effect='fade'
        // speed={3000}
        // autoplay={
        //   isDev
        //     ? undefined
        //     : {
        //         delay: 3000,
        //         disableOnInteraction: false,
        //       }
        // }
        modules={[EffectFade, A11y]}
        className='hero-slider'>
        {tripleitems.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className='hero-11'>
              <img
                src={slide.image}
                alt={slide.title}
                className={'w-100 h-100'}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;

// prev.one
export function HeroCarousel() {
  return (
    <Swiper
      navigation={{
        nextEl: '.array-next',
        prevEl: '.array-prev',
      }}
      loop
      effect='fade'
      speed={3000}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Navigation, EffectFade, Autoplay]}
      className='hero-slider'>
      {slides.map((slide, idx) => (
        <SwiperSlide key={idx}>
          {({ isVisible }) => (
            <div className='hero-1'>
              <div className='shape'>
                <img src='/img/home-1/hero/shape.png' alt='img' />
              </div>
              <div
                className='hero-bg bg-cover'
                style={{
                  backgroundImage: slide.bg,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center center',
                  backgroundSize: 'contain',
                }}></div>
              <motion.div
                initial={{ opacity: 0, visibility: 'hidden' }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  visibility: isVisible ? 'visible' : 'hidden',
                }}
                transition={{
                  delay: 0.5,
                }}
                className='container'>
                <div className='row g-4 justify-content-center'>
                  <div className='col-lg-10'>
                    <div className='hero-content'>
                      <motion.h6
                        initial={{
                          opacity: 0,
                          y: '50px',
                          visibility: 'hidden',
                        }}
                        animate={{
                          opacity: isVisible ? 1 : 0,
                          visibility: isVisible ? 'visible' : 'hidden',
                          y: isVisible ? 0 : '50px',
                        }}
                        transition={{
                          duration: 0.7,
                          delay: 0.5,
                        }}>
                        {slide.subTitle}
                      </motion.h6>
                      <motion.h1
                        initial={{
                          opacity: 0,
                          y: '50px',
                          visibility: 'hidden',
                        }}
                        animate={{
                          opacity: isVisible ? 1 : 0,
                          visibility: isVisible ? 'visible' : 'hidden',
                          y: isVisible ? 0 : '50px',
                        }}
                        transition={{
                          duration: 0.7,
                          delay: 0.7,
                        }}>
                        {slide.title}
                      </motion.h1>
                      <motion.p
                        initial={{
                          opacity: 0,
                          y: '50px',
                          visibility: 'hidden',
                        }}
                        animate={{
                          opacity: isVisible ? 1 : 0,
                          visibility: isVisible ? 'visible' : 'hidden',
                          y: isVisible ? 0 : '50px',
                        }}
                        transition={{
                          duration: 0.7,
                          delay: 0.9,
                        }}>
                        {slide.description}
                      </motion.p>
                      <motion.div
                        className='hero-button'
                        initial={{
                          opacity: 0,
                          y: '50px',
                          visibility: 'hidden',
                        }}
                        animate={{
                          opacity: isVisible ? 1 : 0,
                          visibility: isVisible ? 'visible' : 'hidden',
                          y: isVisible ? 0 : '50px',
                        }}
                        transition={{
                          duration: 0.7,
                          delay: 1.5,
                        }}>
                        <Link to='/contact' className='theme-btn'>
                          Join With Us{' '}
                          <i className='fa-solid fa-arrow-right-long' />
                        </Link>
                        <Link to='/about' className='theme-btn border-btn'>
                          Read More{' '}
                          <i className='fa-solid fa-arrow-right-long' />
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
