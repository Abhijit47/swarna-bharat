import useOnScreen from "@/hooks/useOnScreen";
import { useRef } from "react";
import CountUp from "react-countup";

const statsData = [
  {
    id: 1,
    icon: "/img/home-3/icon/10.svg",
    count: 569,
    label: "Satisficed Clients",
  },
  {
    id: 2,
    icon: "/img/home-3/icon/10.svg",
    count: 12,
    label: "Years Of Experience",
  },
  {
    id: 3,
    icon: "/img/home-3/icon/10.svg",
    count: 25,
    label: "Funds We Collected",
  },
];

const TestimonialCount = () => {
  const counterRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(counterRef);
  return (
    <div ref={counterRef} className="testimonial-count-box">
      {statsData.map((item) => (
        <div className="box" key={item.id}>
          <div className="icon">
            <img src={item.icon} alt="icon" />
          </div>
          <h2>
            <span className="count">
              {isVisible && (
                <CountUp
                  end={item.count}
                  duration={2.75}
                  //   suffix={item.suffix}
                />
              )}
            </span>
            +
          </h2>
          <h6>{item.label}</h6>
        </div>
      ))}
    </div>
  );
};

export default TestimonialCount;
