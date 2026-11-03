import AnimationProvider from '@/components/animationProvider';
import FooterOne from '@/components/footer/footerOne';
import Header from '@/components/header';
// import TopHeader from '@/components/header/topHeader';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { Outlet, ScrollRestoration } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <AnimationProvider>
        {/* <TopHeader /> */}
        <Header />
        <Outlet />
        <FooterOne />
        <ScrollRestoration />
      </AnimationProvider>

      <FloatingWhatsApp
        avatar='/logo.jpeg'
        phoneNumber='+919845732329'
        accountName='Swarna Bharat Foundation'
        statusMessage='Typically replies within 1 hour'
        placeholder='Type a message..'
        chatMessage='Hello there! 🤝 How can we help?'
        notification={!import.meta.env.DEV}
        allowEsc
        allowClickAway
        onSubmit={() => {
          console.log('Submit');
        }}
      />
    </>
  );
};

export default RootLayout;
