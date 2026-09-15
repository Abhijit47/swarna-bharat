import ContactFormOne from "@/components/contact/contactFormOne";
import FaqList from "@/components/faqList";
import PageHeader from "@/components/pageHeader";

const Faq = () => {
  return (
    <>
      <PageHeader currentPage="Our Faq" title="Our Faq" />
      <FaqList />
      <ContactFormOne />
    </>
  );
};

export default Faq;
