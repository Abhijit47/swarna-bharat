import PageHeader from "@/components/pageHeader";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <PageHeader currentPage="404 Error" title="404 Error" />
      <section className="error-section section-padding fix">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="error-item">
                <div className="error-image">
                  <img src="/img/inner-page/404.png" alt="img" />
                </div>
                <div className="error-content">
                  <h2>Page Not Found</h2>
                  <p>
                    Whether through financial aid, resources, or time. It
                    reflects kindness, compassion, and humanity, making the
                    bring hope to the less fortunate.
                  </p>
                  <Link to="/" className="theme-btn">
                    Back To Home <i className="fa-solid fa-arrow-right-long" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;
