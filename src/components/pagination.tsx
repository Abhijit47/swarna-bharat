const Pagination = ({ className="text-center" }: { className?: string }) => {
  return (
    <div className={`page-nav-wrap ${className}`}>
      <ul>
        <li>
          <a className="page-numbers style-2" href="#">
            <i className="fa-solid fa-arrow-left" />
          </a>
        </li>
        <li className="active">
          <a className="page-numbers" href="#">
            01
          </a>
        </li>
        <li>
          <a className="page-numbers" href="#">
            02
          </a>
        </li>
        <li>
          <a className="page-numbers" href="#">
            03
          </a>
        </li>
        <li>
          <a className="page-numbers style-2" href="#">
            <i className="fa-solid fa-arrow-right" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
