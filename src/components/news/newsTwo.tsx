import { newsDataTwo } from "@/data/nwesData";
import { Link } from "react-router-dom";

const NewsTwo = () => {
  return (
    <section className="news-section section-padding pt-0 fix">
      <div className="container">
        <div className="section-title style-2 text-center">
          <span className="sub-title wow fadeInUp">bLOG &amp; nEWS</span>
          <h2 className="wow fadeInUp" data-delay=".3s">
            <span>O</span>ur Latest News &amp; Article's
          </h2>
        </div>
        <div className="row">
          {newsDataTwo.map((news, index) => (
            <div
              key={news.id}
              className="col-lg-6 col-md-6 wow fadeInUp"
              data-delay={`${0.3 + index * 0.2}s`}
            >
              <div className="news-card-items-2">
                <div className="news-image">
                  <img src={news.img} alt="img" />
                  <div className="news-layer-wrapper">
                    {Array(4)
                      .fill(null)
                      .map((_, i) => (
                        <div
                          key={i}
                          className="news-layer-image"
                          style={{ backgroundImage: `url(${news.img})` }}
                        />
                      ))}
                  </div>
                </div>
                <div className="news-content">
                  <ul className="news-meta">
                    <li>
                      <i className="fa-regular fa-user" /> By : {news.author}
                    </li>
                    <li>
                      <i className="fa-regular fa-comment" /> By :{" "}
                      {news.comment}
                    </li>
                  </ul>
                  <h3>
                    <Link to="/news-details">{news.title}</Link>
                  </h3>
                  <p>{news.description}</p>
                  <Link to="/news-details" className="theme-btn border-btn">
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

export default NewsTwo;
