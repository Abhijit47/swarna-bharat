import { Link } from "react-router-dom";

const donationCategories = [
  { name: "Animals", count: 20 },
  { name: "Children", count: 30 },
  { name: "Ecology", count: 40 },
  { name: "Medical", count: 50 },
  { name: "Wildlife", count: 60 },
];

const recentPosts = [
  {
    image: "/img/inner-page/donation-details/post-1.jpg",
    title: "How To Engage Millennials In Charity Work.",
    date: "26 Jul 2025",
  },
  {
    image: "/img/inner-page/donation-details/post-2.jpg",
    title: "Creating Long-Term Partnerships With Donors.",
    date: "26 Jul 2025",
  },
  {
    image: "/img/inner-page/donation-details/post-3.jpg",
    title: "The Importance Of Corporate Social Responsibility.",
    date: "26 Jul 2025",
  },
  {
    image: "/img/inner-page/donation-details/post-4.jpg",
    title: "Ways To Promote Your Non-Profit On Social Media.",
    date: "26 Jul 2025",
  },
  {
    image: "/img/inner-page/donation-details/post-5.jpg",
    title: "How Technology Is Changing The Charity Sector.",
    date: "26 Jul 2025",
  },
];

const DonationDetailsSideber = () => {
  return (
    <div className="donation-details-sideber">
      <div className="donation-details-sideber-box">
        <h4>Categories</h4>
        <ul className="donation-list">
          {donationCategories.map((category, index) => (
            <li key={index}>
              {category.name} <span>({category.count})</span>
            </li>
          ))}
        </ul>
      </div>

      <h4 className="text">Recent Post</h4>
      <div className="details-post-area">
        {recentPosts.map((post, index) => (
          <div className="details-items" key={index}>
            <div className="details-thumb">
              <img src={post.image} alt="img" />
            </div>
            <div className="details-content">
              <h5>
                <Link to={"/donation-details"}>{post.title}</Link>
              </h5>
              <ul>
                <li>{post.date} . By Admin</li>
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div
        className="contact-bg bg-cover"
        style={{
          backgroundImage: "url(/img/inner-page/donation-details/bg.jpg)",
        }}
      >
        <div className="donation-contact-content">
          <div className="icon">
            <i className="fa-light fa-phone-volume" />
          </div>
          <h5>Our Free Helping Is Open 24/7</h5>
          <h6>
            <Link to="tel:+4065550120">+406 555 0120</Link>
          </h6>
          <Link to="/contact" className="theme-btn border-btn">
            Get Help Now <i className="fa-solid fa-arrow-right-long" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonationDetailsSideber;
