import { Link } from "react-router-dom";
const categories = [
  { name: "Donation", count: 1 },
  { name: "Charity", count: 5 },
  { name: "Volunteer", count: 2 },
  { name: "Health", count: 6 },
  { name: "Education", count: 4 },
];

const recentPosts = [
  {
    title: "Where Creativity Meets Commitment",
    date: "March 26, 2025",
    image: "/img/inner-page/news-details/post-1.jpg",
  },
  {
    title: "Where Innovation Meets Foundation",
    date: "March 26, 2025",
    image: "/img/inner-page/news-details/post-2.jpg",
  },
  {
    title: "Structures That Stand Dreams That Soar",
    date: "March 26, 2025",
    image: "/img/inner-page/news-details/post-3.jpg",
  },
];

const tags = [
  "fundraising",
  "charity",
  "donation",
  "water",
  "kids",
  "Education",
];

const NewsSidebar = () => {
  return (
    <div className="main-sideber">
      <div className="single-sidebar-widget">
        <div className="wid-title">
          <h4>Search</h4>
        </div>
        <div className="search-widget">
          <form action="#">
            <input type="text" placeholder="Search here" />
            <button type="submit">
              <i className="fa-solid fa-magnifying-glass" />
            </button>
          </form>
        </div>
      </div>
      <div className="single-sidebar-widget">
        <div className="wid-title">
          <h4>Categories</h4>
        </div>
        <div className="news-widget-categories">
          <ul>
            {categories.map((cat, index) => (
              <li key={index}>
                <Link to={"/news-details"}>{cat.name}</Link>
                <span>{cat.count.toString().padStart(2, "0")}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="single-sidebar-widget">
        <div className="wid-title">
          <h4>Recent Post</h4>
        </div>
        <div className="recent-post-area">
          {recentPosts.map((post, index) => (
            <div className="recent-items" key={index}>
              <div className="recent-thumb">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="recent-content">
                <h6>
                  <Link to={"/news-details"}>{post.title}</Link>
                </h6>
                <ul>
                  <li>{post.date}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="single-sidebar-widget mb-0">
        <div className="wid-title">
          <h4>Tag Cloud</h4>
        </div>
        <div className="news-widget-categories">
          <div className="tagcloud">
            {tags.map((tag, index) => (
              <Link key={index} to="/news-details">
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSidebar;
