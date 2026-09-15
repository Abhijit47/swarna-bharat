const comments = [
  {
    name: "Martha Grey",
    image: "/img/inner-page/project-details/client-1.png",
    text: "Charitable efforts not only uplift individuals and communities but also foster a sense of unity, empathy, and social responsibility.",
    time: "2 Min Ago",
  },
  {
    name: "Jackie Dawson",
    image: "/img/inner-page/project-details/client-2.png",
    text: "Charitable efforts not only uplift individuals and communities but also foster a sense of unity, empathy, and social responsibility.",
    time: "2 Min Ago",
  },
  {
    name: "Hesia Lara",
    image: "/img/inner-page/project-details/client-3.png",
    text: "Charitable efforts not only uplift individuals and communities but also foster a sense of unity, empathy, and social responsibility.",
    time: "2 Min Ago",
  },
];

const CommentArea = () => {
  return (
    <div className="comment-area">
      <h3>{String(comments.length).padStart(2, "0")} Comments</h3>
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

export default CommentArea;
