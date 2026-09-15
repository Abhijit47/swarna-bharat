import Marquee from 'react-fast-marquee';
// import { Link } from 'react-router-dom';

const projectSlides = [
  {
    image: '/img/home-1/project/01.jpg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/img/home-1/project/02.jpg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/img/home-1/project/03.jpg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/img/home-1/project/01.jpg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/img/home-1/project/02.jpg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/img/home-1/project/03.jpg',
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
                  <img src={slide.image} alt='img' />
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
                  <img src={slide.image} alt='img' />
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
