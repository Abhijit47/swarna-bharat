import { Link } from "react-router-dom";

const FooterThree = () => {
  return (
    <footer className="footer-section-3 fix section-bg-2">
      <div className="container-fluid">
        <div className="footer-widget-wrapper-3">
          <div className="section-title style-2 text-center">
            <span className="sub-title wow fadeInUp">Thank You</span>
            <h2 className="wow fadeInUp" data-delay=".3s">
              <span>W</span>hen People Help Each Other <br /> Everyone Wins
            </h2>
          </div>
          <ul className="top-list wow fadeInUp" data-delay=".5s">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/project">Impact</Link>
            </li>
            <li>
              <Link to="/news-details">News</Link>
            </li>
            <li>
              <Link to="/donation">Donate</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          <h2 className="text">CHARTY DONATION</h2>
        </div>
        <div className="footer-bottom-3">
          <div className="footer-wrapper-3">
            <p className="wow fadeInUp" data-delay=".3s">
              Copyright &amp; Design By <span>@Kindio</span>
            </p>
            <ul className="footer-bottom-list wow fadeInUp" data-delay=".5s">
              <li>
                <Link to="/faq">Faq</Link>
              </li>
              <li>
                <Link to="/contact">Careers</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterThree;
