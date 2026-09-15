import { Link } from "react-router-dom";
import Pagination from "../pagination";
// TypeScript interface (optional)
interface CauseType {
  id: number;
  img: string;
  title: string;
  description: string;
  raised: string;
  percent: string;
  progressClass?: string; // extra style (style-2, style-3 etc.)
  buttonClass?: string; // theme-btn style variation
}

const donationData: CauseType[] = [
  {
    id: 1,
    img: "/img/home-2/donation/04.jpg",
    title: "Feed The Hungry",
    description:
      "Overall, I cannot recommend The Gourmet Bistro highly enough. If you're looking for a restaurant that serves delicious.",
    raised: "Raised - $ 16,020.00",
    percent: "57%",
    progressClass: "",
    buttonClass: "theme-btn",
  },
  {
    id: 2,
    img: "/img/home-2/donation/05.jpg",
    title: "Education For All",
    description:
      "Overall, I cannot recommend The Gourmet Bistro highly enough. If you're looking for a restaurant that serves delicious.",
    raised: "Raised : $8.000/415.000",
    percent: "60%",
    progressClass: "style-2",
    buttonClass: "theme-btn style-2",
  },
  {
    id: 3,
    img: "/img/home-2/donation/06.jpg",
    title: "Clean Water Initiative",
    description:
      "Overall, I cannot recommend The Gourmet Bistro highly enough. If you're looking for a restaurant that serves delicious.",
    raised: "Raised : $8.000/415.000",
    percent: "60%",
    progressClass: "style-3",
    buttonClass: "theme-btn style-3",
  },
];

const ProjectsGrid = ({
  className,
  isTitleShow,
  rowClass,
  isPaginationShow,
}: {
  className?: string;
  isTitleShow?: boolean;
  isPaginationShow?: boolean;
  rowClass?: string;
}) => {
  return (
    <section className={`casuss-section-3 section-padding fix ${className}`}>
      <div className="container">
        {isTitleShow ?? (
          <div className="section-title style-2 text-center">
            <span className="sub-title wow fadeInUp">Our Causes</span>
            <h2 className="wow fadeInUp" data-delay=".3s">
              <span>C</span>hanging lives through action
            </h2>
          </div>
        )}
        <div className={`row ${rowClass}`}>
          {donationData.map((cause, index) => (
            <div
              key={cause.id}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-delay={`${0.3 + index * 0.2}s`} // stagger animation
            >
              <div className="causes-card-item-3">
                <div className="causes-image">
                  <img src={cause.img} alt={cause.title} />
                  <div className="causes-layer-wrapper">
                    {Array(4)
                      .fill(null)
                      .map((_, i) => (
                        <div
                          key={i}
                          className="causes-layer-image"
                          style={{ backgroundImage: `url(${cause.img})` }}
                        />
                      ))}
                  </div>
                </div>
                <div className="causes-content">
                  <h4>
                    <Link to={"/project-details"}>{cause.title}</Link>
                  </h4>
                  <p>{cause.description}</p>
                  <div className={`pro-items ${cause.progressClass || ""}`}>
                    <div className="progress">
                      <div className="progress-value style-two" />
                    </div>
                  </div>
                  <ul className="donate-list">
                    <li>{cause.raised}</li>
                    <li>{cause.percent}</li>
                  </ul>
                  <Link to={"/project-details"} className={cause.buttonClass}>
                    More Details <i className="fa-solid fa-arrow-right-long" />
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

export default ProjectsGrid;
