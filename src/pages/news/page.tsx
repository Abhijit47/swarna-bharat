import NewsSidebar from "@/components/news/newsSidebar";
import PageHeader from "@/components/pageHeader";
import Pagination from "@/components/pagination";
import { newsDataFive } from "@/data/nwesData";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <>
      <PageHeader currentPage="Blog List" title="Blog List" />
      <section className="news-standard-section section-padding fix">
        <div className="container">
          <div className="news-standard-wrapper">
            <div className="row g-4">
              <div className="col-lg-8 col-12">
                {newsDataFive.map(
                  ({ date, comment, id, img, title, description }) => (
                    <div className="news-grid-items" key={id}>
                      <div className="news-image">
                        <img src={img} alt="img" />
                      </div>
                      <div className="news-content">
                        <ul className="date-list">
                          <li>
                            <i className="fa-solid fa-calendar-days" />
                            {date}
                          </li>
                          <li>
                            <i className="fa-solid fa-comments" />
                            {comment}
                          </li>
                        </ul>
                        <h3>
                          <Link to="/news-details">{title}</Link>
                        </h3>
                        <p>{description}</p>
                        <Link to="/news-details" className="theme-btn">
                          More About Us{" "}
                          <i className="fa-solid fa-arrow-right-long" />
                        </Link>
                      </div>
                    </div>
                  )
                )}

                <Pagination className="text-left" />
              </div>
              <div className="col-lg-4 col-12">
                <NewsSidebar />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
