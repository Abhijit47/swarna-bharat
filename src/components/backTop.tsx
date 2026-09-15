import { useEffect, useState } from "react";

const BackTop = () => {
  const [showIcon, setShowIcon] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 350) {
        setShowIcon(true);
      } else {
        setShowIcon(false);
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <button
      id="back-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`back-to-top ${showIcon ? "show" : ""}`}
    >
      <i className="fa-regular fa-arrow-up" />
    </button>
  );
};

export default BackTop;
