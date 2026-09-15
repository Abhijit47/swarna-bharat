import useOnScreen from "@/hooks/useOnScreen";
import { useEffect, useRef, useState } from "react";

const counterData = [
  { value: 35, suffix: "k", label: "Team Suppor", style: "style-2" },
  { value: 1, suffix: "k+", label: "Successful Camaigns", style: "" },
  { value: 15, suffix: "k+", label: "Incredible Volunteers", style: "" },
  { value: 400, suffix: "+", label: "Monthly Donor", style: "style-2" },
];

const CounterOne = () => {
  const counterRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(counterRef);
  const [counts, setCounts] = useState(counterData.map(() => 0));

  useEffect(() => {
    if (isVisible) {
      counterData.forEach((item, idx) => {
        let start = 0;
        const end = item.value;
        const duration = 1000;
        const increment = end / (duration / 20);
        const timer = setInterval(() => {
          start += increment;
          setCounts((prev) => {
            const updated = [...prev];
            updated[idx] = Math.min(Math.floor(start), end);
            return updated;
          });
          if (start >= end) clearInterval(timer);
        }, 20);
      });
    }
  }, [isVisible]);

  return (
    <div className="counter-section fix section-bg-1">
      <div className="right-shape">
        <img src="/img/home-1/feature/shape-2.png" alt="img" />
      </div>
      <div className="container">
        <div className="counter-wrapper">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="counter-image">
                <img src="/img/home-1/feature/01.jpg" alt="img" />
                <div className="shape">
                  <img src="/img/home-1/feature/shape-1.png" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="counter-content">
                <div className="section-title mb-0">
                  <span className="sub-title wow fadeInUp">Numbers</span>
                  <h2 className="sec-title">
                    <span>W</span>e Always Help The <br /> Needy People
                  </h2>
                </div>
                <p className="text wow fadeInUp" data-delay=".3s">
                  Charity helps to reduce suffering but also fosters a sense of
                  unity and shared responsibility in differences in someone's
                  life.
                </p>
                <div className="counter-main-item" ref={counterRef}>
                  <div className="counter-item wow fadeInUp" data-delay=".5s">
                    {counterData.slice(0, 2).map((item, idx) => (
                      <div className={`content ${item.style}`} key={item.label}>
                        <h2>
                          <span className="count">{counts[idx]}</span>
                          {item.suffix}
                        </h2>
                        <p>{item.label}</p>
                      </div>
                    ))}
                  </div>
                  <div
                    className="counter-item style-border wow fadeInUp"
                    data-delay=".3s"
                  >
                    {counterData.slice(2, 4).map((item, idx) => (
                      <div className={`content ${item.style}`} key={item.label}>
                        <h2>
                          <span className="count">{counts[idx + 2]}</span>
                          {item.suffix}
                        </h2>
                        <p>{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterOne;
