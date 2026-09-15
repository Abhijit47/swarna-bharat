import AnimationProvider from "@/components/animationProvider";
import FooterOne from "@/components/footer/footerOne";
import Header from "@/components/header";
import TopHeader from "@/components/header/topHeader";
import { Outlet, ScrollRestoration } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <AnimationProvider>
        <TopHeader />
        <Header />
        <Outlet />
        <FooterOne />
        <ScrollRestoration />
      </AnimationProvider>
    </>
  );
};

export default RootLayout;
