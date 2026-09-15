import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const testimonials = [
  {
    stars: 5,
    text: ' “I appreciate the wonderful service being done by Swarna Bharat Foundation. Serving society and helping the needy is the greatest duty. I wish the foundation and Dr. Santosh continued success in reaching greater heights. God bless your noble work.”',
    name: 'Super Star Rajinikanth Sir',
    role: 'Film Actor',
    image: '/testimonies/test-1.png',
  },
  {
    stars: 5,
    text: 'I am very happy to see the wonderful work done by Swarna Bharat Foundation in creating legal awareness programs in schools and colleges. Educating students about law and justice is a great service to society. I truly appreciate your efforts in guiding the younger generation and standing for the rights of poor and needy people. Wishing Swarna Bharat Foundation greater success in continuing this noble mission.',
    name: 'N. Santosh Hegde',
    role: 'Former Solicitor General of India',
    image: '/testimonies/test-2.png',
  },
  {
    stars: 5,
    text: 'I truly appreciate the wonderful service being done by Swarna Bharat Foundation for the betterment of society. Creating legal awareness among the younger generation and educating them about the judicial system is very important today. Our society needs dedicated teams like yours to bring positive change and justice for all. Wishing the foundation continued success in its noble mission.',
    name: 'Annamalai IPS',
    role: 'Deputy Commissioner of Police',
    image: '/testimonies/test-3.png',
  },
  {
    stars: 5,
    text: '"I am very emotional and happy that you people are spreading awareness about health and heart attacks. This kind of initiative will save many lives. I wish Swarna Bharat Foundation to grow higher and higher. All the best to you and your entire team." This encouragement inspires us to continue serving society and creating awareness that can protect and save lives.',
    name: 'Dr. Shivaraj Kumar',
    role: 'Hat-trick Hero',
    image: '/testimonies/test-4.png',
  },
  {
    stars: 5,
    text: 'He appreciated the initiative of Koti Vruksha Sainya in collaboration with Swarna Bharat Foundation and BBMP for organizing a massive tree plantation drive on the occasion of 75th Independence Day, planting 75,000 saplings and committing to nurture them for the next two years. 🌱🌳 This noble initiative aims to make Bengaluru greener and inspire every citizen to plant and protect trees. As rightly mentioned, if every citizen plants and nurtures one sapling, Bengaluru can become richer by 1.3 crore trees',
    name: 'Mr. Basavaraj Bommai',
    role: 'Chief Minister of Karnataka',
    image: '/testimonies/test-5.png',
  },
];

const isDev = import.meta.env.DEV;

const TestimonialOne = () => {
  const tripleData = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className='testimonial-section section-padding fix'>
      <div className='container'>
        <div className='section-title'>
          <span className='sub-title wow fadeInUp'>Testimonials</span>
          <h2 className='wow fadeInUp' data-delay='.3s'>
            <span>W</span>hat People say about our charity.
          </h2>
        </div>
        <div className='testimonial-wrapper'>
          <div className='row g-4 align-items-center'>
            <div
              className='col-lg-5 wow fadeInLeft'
              data-delay='0.1'
              data-wow-duration='2500ms'>
              <div className='testimonial-image'>
                <img src='/img/home-1/testimonial/01.jpg' alt='img' />
                <div className='shape'>
                  <img src='/img/home-1/testimonial/shape.png' alt='img' />
                </div>
              </div>
            </div>
            <div className='col-lg-7'>
              <div className='testimonial-content'>
                <Swiper
                  spaceBetween={30}
                  speed={1300}
                  loop={true}
                  grabCursor={true}
                  rewind={true}
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
                  className='testimonial-slider position-relative'
                  modules={[Pagination, Autoplay]}>
                  {tripleData.map((item, idx) => (
                    <SwiperSlide key={idx}>
                      <div className='content'>
                        <div className='star'>
                          {[...Array(item.stars)].map((_, i) => (
                            <i key={i} className='fa-solid fa-star' />
                          ))}
                        </div>
                        <p>{item.text}</p>
                        <div className='client-info d-flex align-items-center gap-2'>
                          <div className='client-image'>
                            <img
                              src={item.image}
                              alt='img'
                              width={100}
                              height={100}
                              className='rounded-circle object-fit-cover'
                            />
                          </div>
                          <div>
                            <h5>{item.name}</h5>
                            <span>{item.role}</span>
                          </div>
                        </div>
                        {/* <h3>{item.name}</h3>
                        <span>{item.role}</span> */}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                {/* <h6>
                  Total raising money in this year &gt; <span>$4,50,000</span>
                </h6> */}
                {/* <Swiper
                  spaceBetween={30}
                  speed={1300}
                  loop={true}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    1199: {
                      slidesPerView: 4,
                    },
                    991: {
                      slidesPerView: 3,
                    },
                    767: {
                      slidesPerView: 3,
                    },
                    575: {
                      slidesPerView: 1,
                    },
                    0: {
                      slidesPerView: 1,
                    },
                  }}
                  modules={[Autoplay]}
                  className='brand-slider'>
                  {[
                    '01.png',
                    '02.png',
                    '03.png',
                    '04.png',
                    '01.png',
                    '02.png',
                    '03.png',
                    '04.png',
                  ].map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <div className='brand-image text-center'>
                        <img src={`/img/home-1/brand/${img}`} alt='img' />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialOne;
