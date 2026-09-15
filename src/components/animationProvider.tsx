import { animate } from "motion/react";
import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";

const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const pathName = useLocation().pathname;

  useEffect(() => {
    const slideUp = document.querySelectorAll(".fadeInUp");
    const slideDown = document.querySelectorAll(".fadeInDown");
    const slideRight = document.querySelectorAll(".fadeInRight");
    const slideLeft = document.querySelectorAll(".fadeInLeft");

    // Entrance animations (fade/slide)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = parseFloat(el.getAttribute("data-delay") || "0");
            animate(
              el,
              {
                transform: "translate(0, 0)",
                opacity: 1,
                visibility: "visible",
              },
              { duration: 0.6, delay }
            );
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    // Setup animation entry state
    slideUp.forEach((el) => {
      animate(el, {
        transform: "translate(0, 40px)",
        opacity: 0,
        visibility: "hidden",
      });
      observer.observe(el);
    });
    slideDown.forEach((el) => {
      animate(el, {
        transform: "translate(0, -40px)",
        opacity: 0,
        visibility: "hidden",
      });
      observer.observe(el);
    });
    slideLeft.forEach((el) => {
      animate(el, {
        transform: "translate(-40px, 0)",
        opacity: 0,
        visibility: "hidden",
      });
      observer.observe(el);
    });
    slideRight.forEach((el) => {
      animate(el, {
        transform: "translate(40px, 0)",
        opacity: 0,
        visibility: "hidden",
      });
      observer.observe(el);
    });

    return () => {
      slideUp.forEach((el) => observer.unobserve(el));
      slideDown.forEach((el) => observer.unobserve(el));
      slideLeft.forEach((el) => observer.unobserve(el));
      slideRight.forEach((el) => observer.unobserve(el));
    };
  }, [pathName]);

  return <>{children}</>;
};

export default AnimationProvider;
