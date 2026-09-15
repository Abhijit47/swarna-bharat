import { Link } from "react-router-dom";
const categories = [
  { name: "Charity", count: 3 },
  { name: "Donation", count: 4 },
  { name: "Education", count: 5 },
  { name: "Food", count: 6 },
  { name: "Health", count: 4 },
  { name: "Medicine", count: 3 },
  { name: "Water", count: 2 },
];

const recentPosts = [
  {
    title: "How To Engage Millennials In Charity Work.",
    date: "26 Jul 2025",
    author: "Admin",
    image: "/img/inner-page/donation-details/post-1.jpg",
  },
  {
    title: "Creating Long-Term Partnerships With Donors.",
    date: "26 Jul 2025",
    author: "Admin",
    image: "/img/inner-page/donation-details/post-2.jpg",
  },
  {
    title: "How Technology Is Changing The Charity.",
    date: "26 Jul 2025",
    author: "Admin",
    image: "/img/inner-page/donation-details/post-3.jpg",
  },
];

const ProjectDetailsSideber = () => {
  return (
    <div className="causes-details-sideber">
      <div className="causes-details-sideber-box">
        <h4>Categories</h4>
        <ul className="donation-list">
          {categories.map((item, index) => (
            <li key={index}>
              <Link to={"/project-details"}>{item.name}</Link>{" "}
              <span>({String(item.count).padStart(2, "0")})</span>
            </li>
          ))}
        </ul>
      </div>

      <h4 className="text">Recent Post</h4>
      <div className="details-post-area">
        {recentPosts.map((post, index) => (
          <div className="details-items" key={index}>
            <div className="details-thumb">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="details-content">
              <h5>
                <Link to={"/donation-details"}>{post.title}</Link>
              </h5>
              <ul>
                <li>
                  {post.date} . By {post.author}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div
        className="contact-bg bg-cover"
        style={{
          backgroundImage: "url(/img/inner-page/project-details/bg.jpg)",
        }}
      >
        <div className="donation-contact-content">
          <div className="shape">
            <img src="/img/inner-page/project-details/shape.png" alt="" />
          </div>
          <h6>Small Donations Bigger Impact</h6>
          <h2>Education Health For Every Child</h2>
          <Link to="/contact" className="theme-btn border-btn">
            Get Help Now <i className="fa-solid fa-arrow-right-long" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsSideber;
