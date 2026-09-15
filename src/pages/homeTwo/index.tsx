import AboutTwo from "@/components/about/aboutTwo";
import ContactInfoTwo from "@/components/contact/contactInfoTwo";
import CounterTwo from "@/components/counter/counterTwo";
import Cta from "@/components/cta";
import DonationTwo from "@/components/donation/donationTwo";
import HeroFullBg from "@/components/hero/heroFullBg";
import UpcomingEvent from "@/components/upcomingEvent";
import NewsTwo from "@/components/news/newsTwo";
import PricingGrid from "@/components/pricingGrid";
import ServicesTwo from "@/components/services/servicesTwo";
import TestimonialTwo from "@/components/testimonial/testimonialTwo";
import { donationDataTwo } from "@/data/donationData";

const HomeTwo = () => {
  return (
    <>
      <HeroFullBg />
      <AboutTwo />
      <ServicesTwo />
      <CounterTwo />
      <DonationTwo data={donationDataTwo.slice(0, 3)} />
      <Cta />
      <PricingGrid />
      <UpcomingEvent />
      <TestimonialTwo />
      <NewsTwo />
      <ContactInfoTwo />
    </>
  );
};

export default HomeTwo;
