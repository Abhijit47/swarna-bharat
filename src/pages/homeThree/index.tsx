import AboutThree from "@/components/about/aboutThree";
import HeroHalfSlider from "@/components/hero/heroHalfSlider";
import Choose from "@/components/choose";
import Features from "@/components/features";
import HowToWork from "@/components/howToWork";
import NewsThree from "@/components/news/newsThree";
import ProjectsGrid from "@/components/projects/projectsGrid";
import ServicesThree from "@/components/services/servicesThree";
import TestimonialThree from "@/components/testimonial/testimonialThree";
import VolounteerVideoMessage from "@/components/volounteerVideoMessage";

const HomeThree = () => {
  return (
    <>
      <HeroHalfSlider />
      <AboutThree />
      <ServicesThree />
      <ProjectsGrid isPaginationShow={false} />
      <Features />
      <Choose />
      <HowToWork />
      <TestimonialThree />
      <NewsThree />
      <VolounteerVideoMessage />
    </>
  );
};

export default HomeThree;
