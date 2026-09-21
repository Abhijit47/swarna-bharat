// import AboutTwo from '@/components/about/aboutTwo';
import FaqList from '@/components/faqList';
import PageHeader from '@/components/pageHeader';
// import Teams from "@/components/teams";
import TestimonialOne from '@/components/testimonial/testimonialOne';
import { MDXContent } from '@content-collections/mdx/react';
import { aboutUs } from 'content-collections';
import { motion } from 'motion/react';

import '@/assets/css/extra-styles.css';

const About = () => {
  return (
    <>
      <PageHeader currentPage={'About Us'} title={'About Us'} />
      {/* <AboutTwo className='pb-0' /> */}
      {/* <Teams /> */}

      <div className={'container'}>
        <div className={'row'}>
          <div className={'col-12 col-lg-8'}>
            <div
              id={'content-body'}
              // style={{ all: 'revert' }}
            >
              <MDXContent code={aboutUs.mdx} />
            </div>
          </div>
          <div className={'col-12 col-lg-4'}>
            <motion.div
              className='about-image wow '
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
              }}>
              <img src='/about-me.png' alt='img' className={'w-100 h-100'} />
            </motion.div>
          </div>
        </div>
      </div>
      <div className={'container'} id='about-me'>
        <div
          id={'content-body'}
          // style={{ all: 'revert' }}
        >
          <MDXContent code={aboutUs.mdx} />
        </div>
      </div>
      <FaqList className='pb-0' />
      <TestimonialOne />
    </>
  );
};

export default About;
