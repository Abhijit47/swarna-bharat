const comments = [
  {
    name: "Darrell Steward",
    image: "/img/inner-page/news-details/comment-1.png",
    text: "Charity is the act of giving selflessly to those in need, whether through financial aid, resources, or time. It reflects kindness, compassion, and humanity, making the world a better place for everyone.",
    time: "2 Min Ago",
  },
  {
    name: "Savannah Nguyen",
    image: "/img/inner-page/news-details/comment-2.png",
    text: "Charity is the act of giving selflessly to those in need, whether through financial aid, resources, or time. It reflects kindness, compassion, and humanity, making the world a better place for everyone.",
    time: "2 Min Ago",
  },
  {
    name: "Kristin Watson",
    image: "/img/inner-page/news-details/comment-3.png",
    text: "Charity is the act of giving selflessly to those in need, whether through financial aid, resources, or time. It reflects kindness, compassion, and humanity, making the world a better place for everyone.",
    time: "2 Min Ago",
  },
];

const NewsCommentDisplay = () => {
  return (
    <div className="comment-area">
      <h3>{comments.length.toString().padStart(2, "0")} Comments</h3>
      {comments.map((comment, index) => (
        <div className="comment-item" key={index}>
          <div className="client-image">
            <img src={comment.image} alt={comment.name} />
          </div>
          <div className="comment-content">
            <h4>{comment.name}</h4>
            <p>{comment.text}</p>
            <ul className="comment-list">
              <li>
                <i className="fa-regular fa-heart" /> Like
              </li>
              <li>
                <i className="fa-light fa-reply" /> Reply
              </li>
              <li>
                <i className="fa-regular fa-clock" /> {comment.time}
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsCommentDisplay;
