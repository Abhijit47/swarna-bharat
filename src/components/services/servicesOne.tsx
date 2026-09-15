import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const serviceSlides = [
  {
    icon: '/img/home-1/icon/03.svg',
    title: 'Project Hope — Fulfilling Dreams, Supporting Life',
    description:
      'subpara-For children affected by Cancer & HIV/AIDS, including medical and educational support.',
  },
  {
    icon: '/img/home-1/icon/04.svg',
    title: 'Project Care — Healing with Compassion',
    description:
      'Medical support for residents of old age homes, orphanages, and underprivileged children.',
  },
  {
    icon: '/img/home-1/icon/05.svg',
    title: 'Project Shakti — Empower Her, Empower India',
    description:
      'Women’s empowerment, hygiene awareness, legal rights, dignity, and social justice.',
  },
  {
    icon: '/img/home-1/icon/03.svg',
    title: 'Project Jeeva Jala — Water for the Voiceless',
    description:
      'Providing thousands of water bowls for birds, stray animals, and cattle across Bengaluru.',
  },
  {
    icon: '/img/home-1/icon/04.svg',
    title: 'Project Green Bengaluru — Plant Today, Protect Tomorrow',
    description:
      'Tree plantation, maintenance, and environmental conservation under the Koti Vriksha Mission, jointly with BBMP.',
  },
  {
    icon: '/img/home-1/icon/05.svg',
    title: 'Awards & Recognitions',
    description:
      'We proudly recognized and honoured 10,000+ achievers across India for their excellence, leadership, talent, and contribution to society.',
  },
];

const isDev = import.meta.env.DEV;

const ServicesOne = () => {
  return (
    <section
      className='causes-section section-padding fix bg-cover'
      style={{ backgroundImage: 'url(/img/home-1/service/bg.jpg)' }}>
      <div className='shape'>
        <img src='/img/home-1/service/shape.png' alt='img' />
      </div>
      <div className='container'>
        <div className='section-title text-center'>
          <span className='sub-title wow fadeInUp'>Charity Services</span>
          <h2 className='wow fadeInUp' data-delay='.3s'>
            <span>P</span>roviding Humanitarian services to all <br /> people is
            What we do
          </h2>
        </div>
        <Swiper
          spaceBetween={30}
          speed={1300}
          loop={true}
          centeredSlides={true}
          autoplay={
            isDev
              ? undefined
              : {
                  delay: 2000,
                  disableOnInteraction: false,
                }
          }
          pagination={{
            el: '.dot',
            clickable: true,
          }}
          rewind={true}
          grabCursor={true}
          breakpoints={{
            1199: {
              slidesPerView: 3,
            },
            991: {
              slidesPerView: 3,
            },
            767: {
              slidesPerView: 2,
            },
            575: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
          modules={[Pagination, Autoplay]}
          className='service-slider'>
          {serviceSlides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className='causes-box-item'>
                <div className='icon'>
                  <img src={slide.icon} alt='img' />
                </div>
                <div className='content'>
                  <h3>
                    <Link to={'/project-details'}>{slide.title}</Link>
                  </h3>
                  <p>{slide.description}</p>
                  <Link to={'/project-details'} className='theme-btn'>
                    Learn More <i className='fa-solid fa-arrow-right-long' />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='swiper-dot'>
          <div className='dot' />
        </div>
      </div>
    </section>
  );
};

export default ServicesOne;
