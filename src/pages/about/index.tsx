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
          <div className={'col-12 col-lg-4 order-0 order-lg-1'}>
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

            <div className='mt-3'>
              <h4 className={'mb-1'}>Leadership Across Organizations</h4>
              <p className={'mb-1'}>
                Dr. Rajini Santosh has held leadership and organizational roles
                across several fields, including:
              </p>

              <div className='social-icon'>
                <a href='#' title='twitter'>
                  <i className='fa-brands fa-twitter' />
                </a>
                <a href='#' title='whatsapp'>
                  <i className='fa-brands fa-whatsapp' />
                </a>
                <a href='#' title='instagram'>
                  <i className='fa-brands fa-instagram' />
                </a>
                <a href='#' title='youtube'>
                  <i className='fa-brands fa-youtube' />
                </a>
              </div>
              <ul className='list'>
                <li>
                  <CheckIcon />
                  <strong className={'ms-1'}>Director</strong> &mdash; Sun
                  Interiors
                </li>
                <li>
                  <CheckIcon />
                  <strong className={'ms-1'}>Founder & CEO</strong> &mdash;
                  Sunrisers Event Planners
                </li>
                <li>
                  <CheckIcon />
                  <strong className={'ms-1'}>Founder & CEO</strong> &mdash;
                  Swarna Bharat Foundation (Reg.)
                </li>
                <li>
                  <CheckIcon />
                  <strong className={'ms-1'}>Editor-in-Chief</strong> &mdash;
                  Swarna Bharat Times
                </li>
                <li>
                  <CheckIcon />
                  <strong className={'ms-1'}>Civic Leader</strong> &mdash; BPAC
                </li>
                <li>
                  <CheckIcon />
                  <strong className={'ms-1'}>President</strong> &mdash; Human
                  Rights Anti Corruption Force
                </li>
                <li>
                  <CheckIcon />
                  <strong className={'ms-1'}>South India Director</strong>{' '}
                  &mdash; Bharat Book of Records
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={'container'} id='about-me'>
        <div
          id={'content-body'}
          // style={{ all: 'revert' }}
        >
          <MDXContent code={aboutUs.mdx} />
        </div>
      </div> */}
      <FaqList className='pb-0' />
      <TestimonialOne />
    </>
  );
};

export default About;

const CheckIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={30}
      height={30}
      viewBox='0 0 30 30'
      fill='none'>
      <g clipPath='url(#clip0_28034_312)'>
        <path
          d='M29.4997 15C29.4997 23.316 22.5047 29.9935 14.0757 29.4715C6.85371 29.024 0.97571 23.146 0.52871 15.924C0.00620961 7.495 6.68371 0.5 14.9997 0.5C17.2837 0.5 19.4462 1.027 21.3697 1.9705C21.8852 2.2235 22.0742 2.8655 21.7897 3.3645L21.7877 3.368C21.5247 3.829 20.9507 4.0005 20.4747 3.766C18.5657 2.826 16.3832 2.3685 14.0797 2.533C8.02971 2.9645 3.08871 7.817 2.55021 13.8585C1.88021 21.378 7.90621 27.6895 15.3317 27.4955C21.6907 27.3295 26.9987 22.2865 27.4642 15.9425C27.5852 14.2945 27.3867 12.699 26.9147 11.228C26.7652 10.7615 26.9827 10.258 27.4207 10.039C27.9677 9.7655 28.6382 10.039 28.8237 10.6215C29.2627 12.002 29.4997 13.473 29.4997 15Z'
          fill='#FFC107'
        />
        <path
          d='M7.70517 11.236L15.6122 21.9345C16.2092 22.7425 17.4242 22.6725 17.9277 21.8015L29.3537 2.02249C29.9487 0.992492 28.5912 -0.0430082 27.7817 0.823992L15.8777 13.575L8.97067 9.75199C8.03717 9.23549 7.06717 10.3725 7.70517 11.236Z'
          fill='#FFC107'
        />
      </g>
      <defs>
        <clipPath id='clip0_28034_312'>
          <rect width={30} height={30} fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};
