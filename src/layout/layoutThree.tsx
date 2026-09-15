import AnimationProvider from "@/components/animationProvider";
import FooterThree from "@/components/footer/footerThree";
import Header from "@/components/header";
import TopHeaderTwo from "@/components/header/topHeaderTwo";
import { Outlet, ScrollRestoration } from "react-router-dom";

const LayoutThree = () => {
  return (
    <>
      <AnimationProvider>
        <TopHeaderTwo />
        <Header className="header-2 header-3" />
        <Outlet />
        <FooterThree />
        <ScrollRestoration />
      </AnimationProvider>
    </>
  );
};

export default LayoutThree;
