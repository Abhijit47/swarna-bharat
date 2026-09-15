import AnimationProvider from "@/components/animationProvider";
import FooterOne from "@/components/footer/footerOne";
import Header from "@/components/header";
import TopHeaderTwo from "@/components/header/topHeaderTwo";
import { Outlet, ScrollRestoration } from "react-router-dom";

const InnerLayout = () => {
  return (
    <>
      <AnimationProvider>
        <TopHeaderTwo />
        <Header className="header-2 header-3 header-inner" />
        <Outlet />
        <FooterOne />
        <ScrollRestoration />
      </AnimationProvider>
    </>
  );
};

export default InnerLayout;
