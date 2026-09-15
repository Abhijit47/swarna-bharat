import type { DonationType } from "@/type/donationType";
import { Link } from "react-router-dom";

const DonationTwo = ({
  data,
  isTitleShow,
  cardClass,
  rowClass,
}: {
  data: DonationType[];
  isTitleShow?: boolean;
  cardClass?: string;
  rowClass?: string;
}) => {
  return (
    <section className="donation-section-2 section-padding fix">
      <div className="container">
        {isTitleShow ?? (
          <div className="section-title style-2">
            <span className="sub-title wow fadeInUp">Funds Collection</span>
            <h2 className="wow fadeInUp" data-delay=".3s">
              <span>E</span>xplore Our Campaigns
            </h2>
          </div>
        )}
        <div className="donation-wrapper-2">
          <div className={`row ${rowClass}`}>
            {data.map((item, idx) => (
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-delay={`${0.3 + idx * 0.2}s`}
                key={item.title}
              >
                <div className={`donation-card-item-2 ${cardClass}`}>
                  <div className="left-shape">
                    <img src={item.shape} alt="img" />
                  </div>
                  <div className="donation-image">
                    <img src={item.image} alt="img" />
                    <div className="news-layer-wrapper">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className="news-layer-image"
                          style={{ backgroundImage: `url(${item.image})` }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="donation-content">
                    <h4>
                      <Link to={"/donation-details"}>{item.title}</Link>
                    </h4>
                    <div className={`pro-items ${item.progressClass}`}>
                      <div className="progress">
                        <div className="progress-value style-two" />
                      </div>
                    </div>
                    <ul className="donate-list">
                      <li>Raised - {item.raised}</li>
                      <li>
                        <span>Goal - {item.goal}</span>
                      </li>
                    </ul>
                    <Link to={"/donation-details"} className={item.btnClass}>
                      Donate Now <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationTwo;
