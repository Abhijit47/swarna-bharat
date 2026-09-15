import type { NewsType } from "@/type/newsType";
import { Link } from "react-router-dom";
import Pagination from "../pagination";

const NewsOne = ({
  data,
  isTitleShow,
  isPaginationShow,
  className,
  cardClass,
  rowClass,
}: {
  data: NewsType[];
  isTitleShow?: boolean;
  isPaginationShow?: boolean;
  className?: string;
  cardClass?: string;
  rowClass?: string;
}) => {
  return (
    <section className={`news-section section-padding fix ${className}`}>
      <div className="container">
        {isTitleShow ?? (
          <div className="section-title text-center">
            <span className="sub-title wow fadeInUp">bLOG &amp; nEWS</span>
            <h2 className="wow fadeInUp" data-delay=".3s">
              <span>I</span>nsights from latest blog
            </h2>
          </div>
        )}
        <div className={`row ${rowClass}`}>
          {data.map((item, index) => (
            <div
              key={item.id}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-delay={index * 0.2}
            >
              <div className={`news-card-items ${cardClass}`}>
                <div className="news-image">
                  <img src={item.img} alt="img" />
                  <div className="news-layer-wrapper">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="news-layer-image"
                        style={{ backgroundImage: `url(${item.img})` }}
                      />
                    ))}
                  </div>
                  <div className="bottom-shape">
                    <img src="/img/home-1/news/shape.png" alt="img" />
                  </div>
                </div>
                <div className="news-content">
                  <ul className="news-meta">
                    <li>
                      <i className="fa-regular fa-user" /> By : {item.author}
                    </li>
                    <li>
                      <i className="fa-regular fa-comment" />
                      {item.comment}
                    </li>
                  </ul>
                  <h4>
                    <Link to={"/news-details"}>{item.title}</Link>
                  </h4>
                  <Link to={"/news-details"} className="link-btn">
                    Read More <i className="fa-solid fa-arrow-right-long" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {isPaginationShow ?? <Pagination />}
      </div>
    </section>
  );
};

export default NewsOne;
