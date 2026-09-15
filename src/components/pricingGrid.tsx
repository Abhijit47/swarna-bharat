import { Link } from "react-router-dom";

const pricingPlans = [
  {
    title: "Free Pricing plan",
    price: "$00",
    description:
      "Charity not only helps to reduce suffering but also fosters a sense of unity and shared responsibility in different lives.",
    style: "",
  },
  {
    title: "Standard Pricing plan",
    price: "$60",
    description:
      "Charity not only helps to reduce suffering but also fosters a sense of unity and shared responsibility in different lives.",
    style: "",
  },
  {
    title: "Premium Pricing plan",
    price: "$90",
    description:
      "Charity not only helps to reduce suffering but also fosters a sense of unity and shared responsibility in different lives.",
    style: "mb-0",
  },
];

const pricingFeatures = [
  "We are privileged to work.",
  "24/7 system monitoring",
  "Encourage team member",
  "remote best support",
];

const PricingGrid = () => {
  return (
    <section className="pricing-section section-padding fix">
      <div className="container">
        <div className="section-title style-2">
          <span className="sub-title wow fadeInUp">Pricing Plan</span>
          <h2 className="wow fadeInUp" data-delay=".3s">
            <span>T</span>he terms and conditions <br /> set your plan
          </h2>
        </div>
        <div className="pricing-wrapper">
          <div className="row g-4">
            <div className="col-lg-6">
              {pricingPlans.map((plan, idx) => (
                <div
                  className={`pricing-card-item-2 wow fadeInLeft ${plan.style}`}
                  data-delay={`${0.3 + idx * 0.2}s`}
                  key={plan.title}
                >
                  <div className="content">
                    <h3>{plan.title}</h3>
                    <p>{plan.description}</p>
                  </div>
                  <h3 className="number">{plan.price}</h3>
                </div>
              ))}
            </div>
            <div className="col-lg-6">
              {pricingPlans.map((plan, idx) => (
                <div
                  className={`pricing-right-card wow fadeInRight`}
                  data-delay={`${0.3 + idx * 0.2}s`}
                  key={plan.title + "-features"}
                >
                  <ul className="pricing-list">
                    {pricingFeatures.map((feature) => (
                      <li key={feature}>
                        <i className="fa-solid fa-check-double" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pricing-button">
                    <Link to="/pricing" className="theme-btn">
                      Choose Your Plan{" "}
                      <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingGrid;
