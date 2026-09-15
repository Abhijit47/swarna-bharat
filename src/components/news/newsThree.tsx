import { newsDataThree } from "@/data/nwesData";
import { Link } from "react-router-dom";

const NewsThree = () => {
  return (
    <section
      className="news-section-3 section-padding fix bg-cover"
      style={{ backgroundImage: "url(/img/home-3/news/bg.jpg)" }}
    >
      <div className="left-shape">
        <img src="/img/home-3/news/shape-1.png" alt="img" />
      </div>
      <div className="right-shape">
        <img src="/img/home-3/news/shape-2.png" alt="img" />
      </div>
      <div className="container">
        <div className="section-title style-2">
          <span className="sub-title wow fadeInUp">bLOG &amp; nEWS</span>
          <h2 className="wow fadeInUp" data-delay=".3s">
            <span>O</span>ur Latest News &amp; Article's
          </h2>
        </div>
        <div className="row">
          {newsDataThree.map((item, index) => (
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-delay={`${0.3 + index * 0.2}s`}
              key={item.id}
            >
              <div className="news-card-items-3">
                <div className="news-image">
                  <img src={item.img} alt="news" />
                  <div className="news-layer-wrapper">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="news-layer-image"
                        style={{ backgroundImage: `url(${item.img})` }}
                      />
                    ))}
                  </div>
                </div>
                <div className="news-content">
                  <ul className="news-meta">
                    <li>
                      <i className="fa-regular fa-user" /> By : Admin
                    </li>
                    <li>
                      <i className="fa-regular fa-comment" /> By : Comment
                    </li>
                  </ul>
                  <h4>
                    <Link to={"/news-details"}>{item.title}</Link>
                  </h4>
                  <Link to={"/news-details"} className="theme-btn">
                    Read More <i className="fa-solid fa-arrow-right-long" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsThree;
