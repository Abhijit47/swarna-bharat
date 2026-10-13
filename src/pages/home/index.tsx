import AboutOne from '@/components/about/aboutOne';
import ContactInfoOne from '@/components/contact/contactInfoOne';
import CounterOne from '@/components/counter/counterOne';
// import DonationOne from "@/components/donation/donationOne";
import FaqList from '@/components/faqList';
import HeroSlider from '@/components/hero/heroSlider';
import NewsOne from '@/components/news/newsOne';
import ProjectsSlider from '@/components/projects/projectsSlider';
import SEO_TAGS from '@/components/seo';
import ServicesOne from '@/components/services/servicesOne';
// import Teams from '@/components/teams';
import TestimonialOne from '@/components/testimonial/testimonialOne';
// import { newsDataOne } from '@/data/nwesData';

const baseUrl = import.meta.env.VITE_APP_BASE_URL;

const Home = () => {
  return (
    <>
      <SEO_TAGS
        title='Home | Swarna Bharat Foundation'
        description='Welcome to Swarna Bharat, building a brighter future through community-driven initiatives and sustainable development.'
        canonical={`${baseUrl}/`}
        schemaMarkup={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Swarna Bharat',
          url: `${baseUrl}/`,
        }}
      />
      <HeroSlider />
      <AboutOne />
      <ServicesOne />
      {/* <DonationOne /> */}
      <ProjectsSlider />
      {/* <Teams /> */}
      <TestimonialOne />
      <CounterOne />
      <FaqList />
      <NewsOne
        // data={newsDataOne}
        isPaginationShow={false}
        className='pt-0'
      />
      <ContactInfoOne />
    </>
  );
};

export default Home;
