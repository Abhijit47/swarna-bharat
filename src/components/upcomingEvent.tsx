import { motion } from "motion/react";
import { Link } from "react-router-dom";
const upcomingEvents = [
  {
    month: "Jan",
    day: "06",
    title: "Trustee leadership programmer",
    time: "3.00pm - 4.00pm",
    location: "London park",
    active: false,
  },
  {
    month: "Jan",
    day: "07",
    title: "Apprenticeship taster event",
    time: "3.00pm - 4.00pm",
    location: "London park",
    active: true,
  },
  {
    month: "Jan",
    day: "08",
    title: "Event health food for growing",
    time: "3.00pm - 4.00pm",
    location: "London park",
    active: false,
  },
  {
    month: "Jan",
    day: "09",
    title: "Education for poor children",
    time: "3.00pm - 4.00pm",
    location: "London park",
    active: false,
  },
];

const UpcomingEvent = () => {
  return (
    <section className="upcoming-event-section section-padding section-bg-1 fix">
      <div className="container">
        <div className="section-title style-2 text-center">
          <span className="sub-title wow fadeInUp">Upcoming Event</span>
          <h2 className="wow fadeInUp" data-delay=".3s">
            <span>E</span>xciting events &amp; upcoming <br /> announcements.
          </h2>
        </div>
        <div className="upcoming-event-wrapper">
          <div className="row g-4">
            <div className="col-lg-6">
              <motion.div
                className="upcoming-event-image wow"
                initial={{
                  x: "5%",
                  clipPath: "inset(0 100% 0 0)",
                  opacity: 0,
                }}
                whileInView={{
                  x: "0%",
                  clipPath: "inset(0 0 0 0)",
                  opacity: 1,
                }}
                transition={{
                  duration: 1.3,
                  ease: [0.645, 0.045, 0.355, 1],
                  delay: 0.3,
                }}
              >
                <img src="/img/home-2/event/01.jpg" alt="img" />
              </motion.div>
              <p>
                Overall, I cannot recommend The Gourmet Bistro highly enough. If
                you're looking for a restaurant that serves delicious,
                beautifully presented dishes with impeccable service, look no
                further.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="upcoming-event-item">
                {upcomingEvents.map((event, idx) => (
                  <div
                    className={`upcoming-event-box${
                      event.active ? " event-acive-box" : ""
                    } wow fadeInUp`}
                    data-delay={`${0.2 + idx * 0.2}s`}
                    key={event.title}
                  >
                    <div className="left-content">
                      <span>{event.month}</span>
                      <h4>{event.day}</h4>
                    </div>
                    <div className="right-content">
                      <h5>
                        <Link to={"/event-details"}>{event.title}</Link>
                      </h5>
                      <ul className="event-list">
                        <li>
                          <i className="fa-regular fa-clock" />
                          {event.time}
                        </li>
                        <li>
                          <i className="fa-regular fa-location-dot" />
                          {event.location}
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvent;
