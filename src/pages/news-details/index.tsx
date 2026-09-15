import NewsCommentDisplay from "@/components/news/newsCommentDisplay";
import NewsCommentForm from "@/components/news/newsCommentForm";
import NewsSidebar from "@/components/news/newsSidebar";
import PageHeader from "@/components/pageHeader";
import { Link } from "react-router-dom";

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M9.22996 17.7227C9.17691 17.7227 9.12443 17.7117 9.07583 17.6905C9.02722 17.6692 8.98354 17.6381 8.94754 17.5991L1.33265 9.36203C1.28189 9.30712 1.24824 9.2386 1.23581 9.16485C1.22339 9.09111 1.23273 9.01534 1.2627 8.94683C1.29267 8.87831 1.34196 8.82002 1.40455 8.77908C1.46713 8.73815 1.54029 8.71634 1.61508 8.71634H5.28046C5.33549 8.71635 5.38988 8.72816 5.43997 8.75098C5.49005 8.7738 5.53465 8.80709 5.57077 8.84861L8.11569 11.7765C8.39073 11.1885 8.92315 10.2096 9.85746 9.01676C11.2387 7.2533 13.8078 4.6598 18.2034 2.31857C18.2883 2.27333 18.3872 2.26159 18.4804 2.28566C18.5736 2.30974 18.6543 2.36789 18.7068 2.44862C18.7592 2.52935 18.7794 2.6268 18.7635 2.72172C18.7475 2.81665 18.6966 2.90215 18.6207 2.96134C18.6039 2.97446 16.9092 4.30907 14.9587 6.75365C13.1636 9.00326 10.7774 12.6817 9.60319 17.4306C9.58256 17.514 9.53459 17.5881 9.46692 17.6411C9.39925 17.6941 9.31579 17.7229 9.22984 17.7229L9.22996 17.7227Z"
        fill="#FFC107"
      />
    </svg>
  );
};
const NewsDetails = () => {
  return (
    <>
      <PageHeader currentPage="Blog Details" title="Blog Details" />
      <section className="news-details-section section-padding fix">
        <div className="container">
          <div className="news-details-wrapper">
            <div className="row g-4">
              <div className="col-lg-8 col-12">
                <div className="news-details-post">
                  <div className="news-details-image">
                    <img
                      src="/img/inner-page/news-details/details-1.jpg"
                      alt="img"
                    />
                  </div>
                  <div className="news-details-content">
                    <ul className="date-list">
                      <li>
                        <i className="fa-solid fa-calendar-days" />
                        11 March 2025
                      </li>
                      <li>
                        <i className="fa-regular fa-location-dot" />
                        684 West College St Sun City Usa
                      </li>
                    </ul>
                    <p>
                      Charity is the act of giving selflessly to those in need,
                      whether through financial aid, resources, or time. It
                      reflects kindness, compassion, and humanity, making the
                      world a better place for everyone. By supporting
                      charitable causes, individuals and communities can help
                      fight poverty, provide education.
                    </p>
                    <p className="mt-3">
                      Charity is the act of giving selflessly to those in need,
                      whether through financial aid, resources, or time. It
                      reflects kindness, compassion, and humanity, making the
                      bring hope to the less fortunate.
                    </p>
                    <div className="sideber">
                      <h5>
                        Charity is the act of giving selflessly to those in
                        need, whether through financial aid, resources, or time.
                        It reflects kindness, compassion, and humanity, making
                        the bring hope to the less fortunate.
                      </h5>
                    </div>
                    <h3>Summary</h3>
                    <p className="mt-3">
                      Charity is the act of giving selflessly to those in need,
                      whether through financial aid, resources, or time. It
                      reflects kindness, compassion, and humanity, making the
                      world a better place for everyone. By supporting
                      charitable causes, individuals and communities can help
                      fight poverty, provide education.
                    </p>
                    <div className="news-details-list-items">
                      <ul className="list-item">
                        <li>
                          <CheckIcon />
                          Empower Through Charity
                        </li>
                        <li>
                          <CheckIcon />
                          Healing Communities
                        </li>
                        <li>
                          <CheckIcon />
                          Compassion in Action
                        </li>
                      </ul>
                      <ul className="list-item">
                        <li>
                          <CheckIcon />
                          Giving Hope Changing
                        </li>
                        <li>
                          <CheckIcon />
                          Together We Can
                        </li>
                        <li>
                          <CheckIcon />
                          Every Act Counts
                        </li>
                      </ul>
                    </div>
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="news-thumb">
                          <img
                            src="/img/inner-page/news-details/details-2.jpg"
                            alt="img"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="news-thumb">
                          <img
                            src="/img/inner-page/news-details/details-3.jpg"
                            alt="img"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row tag-share-wrap mt-4 mb-5">
                      <div className="col-lg-8 col-12">
                        <div className="tagcloud">
                          <span>Tags:</span>
                          <Link to="/news-details">fundraising</Link>
                          <Link to="/news-details">charity</Link>
                        </div>
                      </div>
                      <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end">
                        <div className="social-share">
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-youtube" />
                          </a>
                          <a href="#">
                            <i className="fab fa-linkedin-in" />
                          </a>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <NewsCommentDisplay />
                    <NewsCommentForm />
                  </div>
                </div>
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

export default NewsDetails;
