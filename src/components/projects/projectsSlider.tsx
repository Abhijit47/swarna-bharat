import Marquee from 'react-fast-marquee';
// import { Link } from 'react-router-dom';

const projectSlides = [
  {
    image: '/imgs/WhatsApp Image 2026-07-30 at 10.08.17 PM.jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/imgs/WhatsApp Image 2026-07-30 at 10.08.17 PM (1).jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/imgs/WhatsApp Image 2026-07-30 at 10.08.17 PM (2).jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/imgs/WhatsApp Image 2026-07-30 at 10.08.18 PM.jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/imgs/WhatsApp Image 2026-07-30 at 10.08.19 PM (1).jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/imgs/WhatsApp Image 2026-07-30 at 10.08.19 PM.jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/imgs/WhatsApp Image 2026-07-30 at 10.08.20 PM (2).jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/imgs/WhatsApp Image 2026-07-30 at 10.08.20 PM.jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/imgs/WhatsApp Image 2026-07-30 at 10.08.21 PM (1).jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/imgs/WhatsApp Image 2026-07-30 at 10.08.21 PM.jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/imgs/WhatsApp Image 2026-07-30 at 10.08.22 PM (2).jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/imgs/WhatsApp Image 2026-07-30 at 10.08.22 PM.jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/imgs/WhatsApp Image 2026-07-30 at 10.08.23 PM (1).jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/imgs/WhatsApp Image 2026-07-30 at 10.08.23 PM (2).jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/imgs/WhatsApp Image 2026-07-30 at 10.08.23 PM.jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/imgs/WhatsApp Image 2026-09-10 at 12.49.54 PM.jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/imgs/WhatsApp Image 2026-09-10 at 12.59.58 PM (2).jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/imgs/WhatsApp Image 2026-09-10 at 12.59.58 PM.jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/imgs/WhatsApp Image 2026-09-10 at 12.59.59 PM (1).jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/imgs/WhatsApp Image 2026-09-10 at 12.59.59 PM (2).jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
];

const ProjectsSlider = () => {
  return (
    <section className='project-section fix'>
      <div className='container'>
        <div className='section-title text-center'>
          <span className='sub-title wow fadeInUp'>Complete Project</span>
          <h2 className='wow fadeInUp' data-delay='.3s'>
            <span>O</span>ur Recent completed Project
          </h2>
        </div>
      </div>
      <Marquee speed={100} className='project-slider'>
        {projectSlides.map((slide, idx) => (
          <div key={idx} style={{ marginRight: '20px' }}>
            <div className='brand-slide-element'>
              <div className='project-card-item'>
                <div className='project-image'>
                  <img
                    src={slide.image}
                    alt='img'
                    width={'100%'}
                    height={'100%'}
                    style={{ aspectRatio: 16 / 9 }}
                  />
                  {/* <div className="shape-image">
                    <img src={slide.shape} alt="img" />
                  </div> */}
                  {/* <div className={`project-content ${slide.contentClass}`}>
                    <div className='content'>
                      <h3>
                        <Link to={'/project-details'}>{slide.title}</Link>
                      </h3>
                      <h5>{slide.subtitle}</h5>
                    </div>
                    <Link to={'/project-details'} className='arrow-icon'>
                      <i className='fa-solid fa-arrow-right-long' />
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
      <Marquee speed={100} direction='right' className='project-slider-2'>
        {projectSlides.map((slide, idx) => (
          <div key={idx} style={{ marginRight: '20px' }}>
            <div className='brand-slide-element'>
              <div className='project-card-item'>
                <div className='project-image'>
                  <img
                    src={slide.image}
                    alt='img'
                    width={'100%'}
                    height={'100%'}
                    className='object-fit-cover'
                    style={{ aspectRatio: 16 / 9 }}
                  />
                  {/* <div className='shape-image'>
                    <img src={slide.shape} alt='img' />
                  </div> */}
                  {/* <div className={`project-content ${slide.contentClass}`}>
                    <div className='content'>
                      <h3>
                        <Link to={'/project-details'}>{slide.title}</Link>
                      </h3>
                      <h5>{slide.subtitle}</h5>
                    </div>
                    <Link to={'/project-details'} className='arrow-icon'>
                      <i className='fa-solid fa-arrow-right-long' />
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default ProjectsSlider;
