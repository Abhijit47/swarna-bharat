import { useEffect, useState } from "react";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      console.log("Load event fired");
      setTimeout(() => {
        setIsLoaded(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 100);
      }, 50);
    };

    const handleDOMContentLoaded = () => {
      console.log("DOMContentLoaded event fired");
      setTimeout(() => {
        setIsLoaded(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 100);
      }, 50);
    };

    window.addEventListener("load", handleLoad);
    window.addEventListener("DOMContentLoaded", handleDOMContentLoaded);

    // Fallback timeout
    const fallbackTimeout = setTimeout(() => {
      console.log("Fallback timeout triggered");
      setIsLoaded(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 100);
    }, 3000);

    return () => {
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("DOMContentLoaded", handleDOMContentLoaded);
      clearTimeout(fallbackTimeout);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      id="preloader"
      className={`preloader ${isLoaded ? "loaded" : ""}`}
      style={{ display: isLoading ? "block" : "none" }}
    >
      <div className="animation-preloader">
        <div className="spinner" />
        <div className="txt-loading">
          {["K", "I", "N", "D", "I", "O"].map((letter, idx) => (
            <span
              key={idx}
              data-text-preloader={letter}
              className="letters-loading"
            >
              {letter}
            </span>
          ))}
        </div>
        <p className="text-center">Loading</p>
      </div>
      <div className="loader">
        <div className="row">
          {[...Array(4)].map((_, idx) => (
            <div
              key={idx}
              className={`col-3 loader-section ${
                idx < 2 ? "section-left" : "section-right"
              }`}
            >
              <div className="bg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preloader;
