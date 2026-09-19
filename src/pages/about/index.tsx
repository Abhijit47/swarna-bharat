import AboutTwo from '@/components/about/aboutTwo';
import FaqList from '@/components/faqList';
import PageHeader from '@/components/pageHeader';
// import Teams from "@/components/teams";
import TestimonialOne from '@/components/testimonial/testimonialOne';

const About = () => {
  return (
    <>
      <PageHeader currentPage={'About Us'} title={'About Us'} />
      <AboutTwo className='pb-0' />
      {/* <Teams /> */}
      <FaqList className='pb-0' />
      <TestimonialOne />
    </>
  );
};

export default About;
