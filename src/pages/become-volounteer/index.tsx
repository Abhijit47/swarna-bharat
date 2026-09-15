import PageHeader from "@/components/pageHeader";
import VolunteerFrom from "./volunteerFrom";

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
    >
      <g clipPath="url(#clip0_28002_883)">
        <path
          d="M29.4997 15C29.4997 23.316 22.5047 29.9935 14.0757 29.4715C6.85371 29.024 0.97571 23.146 0.52871 15.924C0.00620961 7.495 6.68371 0.5 14.9997 0.5C17.2837 0.5 19.4462 1.027 21.3697 1.9705C21.8852 2.2235 22.0742 2.8655 21.7897 3.3645L21.7877 3.368C21.5247 3.829 20.9507 4.0005 20.4747 3.766C18.5657 2.826 16.3832 2.3685 14.0797 2.533C8.02971 2.9645 3.08871 7.817 2.55021 13.8585C1.88021 21.378 7.90621 27.6895 15.3317 27.4955C21.6907 27.3295 26.9987 22.2865 27.4642 15.9425C27.5852 14.2945 27.3867 12.699 26.9147 11.228C26.7652 10.7615 26.9827 10.258 27.4207 10.039C27.9677 9.7655 28.6382 10.039 28.8237 10.6215C29.2627 12.002 29.4997 13.473 29.4997 15Z"
          fill="#FFC107"
        />
        <path
          d="M7.70517 11.236L15.6122 21.9345C16.2092 22.7425 17.4242 22.6725 17.9277 21.8015L29.3537 2.02249C29.9487 0.992492 28.5912 -0.0430082 27.7817 0.823992L15.8777 13.575L8.97067 9.75199C8.03717 9.23549 7.06717 10.3725 7.70517 11.236Z"
          fill="#FFC107"
        />
      </g>
      <defs>
        <clipPath id="clip02_28002_883">
          <rect width={30} height={30} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const BecomeVolounteer = () => {
  return (
    <>
      <PageHeader
        currentPage="Become A Volunteers"
        title="Become A Volunteers"
      />
      <section className="become-volounteer-section section-padding fix">
        <div className="container">
          <div className="become-volounteer-wrapper">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="become-volounteer-content">
                  <div className="section-title mb-0">
                    <span className="sub-title wow fadeInUp">
                      Become a Volunteer{" "}
                    </span>
                    <h2 className="wow fadeInUp" data-delay=".3s">
                      <span>V</span>olunteer requirements
                    </h2>
                  </div>
                  <p className="text">
                    Overall, I cannot recommend The Gourmet Bistro highly
                    enough. If you're looking for a restaurant that serves
                    delicious, beautifully presented dishes with impeccable
                    service, look no further.
                  </p>
                  <div className="become-volounteer-list">
                    <ul className="list-item">
                      <li>
                        <CheckIcon />
                        Meet The Deadlines
                      </li>
                      <li>
                        <CheckIcon />
                        Time Saving
                      </li>
                    </ul>
                    <ul className="list-item">
                      <li>
                        <CheckIcon />
                        Best Quality Services
                      </li>
                      <li>
                        <CheckIcon />
                        24/7 Customer
                      </li>
                    </ul>
                  </div>
                  <div className="progress-area">
                    <div className="progress-wrap">
                      <div className="pro-items wow fadeInUp" data-delay=".3s">
                        <div className="pro-head">
                          <h6 className="title">Donation Collection</h6>
                          <span className="point">70%</span>
                        </div>
                        <div className="progress">
                          <div className="progress-value" />
                        </div>
                      </div>
                      <div className="pro-items wow fadeInUp" data-delay=".5s">
                        <div className="pro-head">
                          <h6 className="title">Successful Events</h6>
                          <span className="point">80%</span>
                        </div>
                        <div className="progress">
                          <div className="progress-value style-two" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <VolunteerFrom />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BecomeVolounteer;
