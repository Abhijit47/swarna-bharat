import ContactFormTwo from '@/components/contact/contactFormTwo';
import PageHeader from '@/components/pageHeader';
import SEO_TAGS from '@/components/seo';

const baseUrl = import.meta.env.VITE_APP_BASE_URL;

const Contact = () => {
  return (
    <>
      <SEO_TAGS
        title='Contact | Swarna Bharat Foundation'
        description='Welcome to Swarna Bharat, building a brighter future through community-driven initiatives and sustainable development.'
        canonical={`${baseUrl}/`}
        schemaMarkup={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Swarna Bharat',
          url: `${baseUrl}/`,
        }}
      />
      <PageHeader currentPage='Contact Us' title='Contact Us' />
      <ContactFormTwo />
    </>
  );
};

export default Contact;
