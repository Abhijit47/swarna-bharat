import useOnScreen from "@/hooks/useOnScreen";
import { useRef } from "react";
import CountUp from "react-countup";

const counterItems = [
  {
    value: 3865567,
    suffix: "",
    label: "Volunteers In 2025",
    style: "",
  },
  {
    value: 120,
    suffix: "k+",
    label: "Customer Satisfaction",
    style: "style-2",
  },
  {
    value: 25,
    suffix: "+",
    label: "Funds We Collected",
    style: "style-2",
  },
];

const CounterTwo = () => {
  const counterRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(counterRef);
  return (
    <section className="counter-section-2 section-padding pb-0 fix">
      <div className="right-shape">
        <img src="/img/home-2/counter/blur.png" alt="img" />
      </div>
      <div className="container">
        <div className="section-title style-2 text-center mb-0">
          <span className="sub-title wow fadeInUp">Help Organization</span>
          <h2 className="wow fadeInUp" data-delay=".3s">
            <span>W</span>here smiles are the building <br /> blocks of learning
          </h2>
        </div>
        <div className="row">
          <div className="counter-main-wrapper">
            <p className="wow fadeInUp" data-delay=".3s">
              Charity is a powerful act of kindness and compassion that aims to
              support those in need and improve the well-being of society. It
              involves giving time, money, resources, or services to help the
              less fortunate, promote education, provide healthcare, and respond
              to emergencies. Charitable efforts not only uplift individuals and
              communities but also foster a sense of unity, empathy, and social
              responsibility. Whether through small acts or large-scale
              initiatives, charity plays a crucial role in building a more just
              and a compassionate world.
            </p>
            <div className="map-shape">
              <img src="/img/home-2/counter/map.png" alt="img" />
            </div>
            <div className="counter-wrapper-2">
              <div className="counter-image">
                <img src="/img/home-2/counter/01.jpg" alt="img" />
              </div>
              <div className="counter-item" ref={counterRef}>
                {counterItems.map((item, idx) => (
                  <div
                    className={`counter-content ${item.style} wow fadeInUp`}
                    data-delay={`${0.3 + idx * 0.2}s`}
                    key={item.label}
                  >
                    <h2>
                      <span className="count">
                        {isVisible && (
                          <CountUp
                            end={item.value}
                            duration={2.75}
                            suffix={item.suffix}
                          />
                        )}
                      </span>
                    </h2>
                    <h5>{item.label}</h5>
                  </div>
                ))}
              </div>
              <div className="counter-image">
                <img src="/img/home-2/counter/02.jpg" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterTwo;
