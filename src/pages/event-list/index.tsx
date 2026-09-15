import PageHeader from "@/components/pageHeader";
import { Link } from "react-router-dom";
import { eventsData } from "../event";
import EventListSidebar from "./eventListSidebar";

const EventList = () => {
  return (
    <>
      <PageHeader currentPage="Event List" title="Event List" />
      <section className="event-list-section section-padding fix">
        <div className="container">
          <div className="event-list-wrapper">
            <div className="row g-4">
              <div className="col-lg-8 col-12">
                {eventsData.map((event, index) => (
                  <div className="event-list-items" key={index}>
                    <div className="event-image">
                      <img src={event.image} alt="img" />
                    </div>
                    <div className="event-content">
                      <ul className="event-list">
                        <li>
                          <i className="fa-regular fa-location-dot" />
                          {event.location}
                        </li>
                        <li>
                          <i className="fa-regular fa-calendar-days" />
                          {event.date}
                        </li>
                        <li>
                          <i className="fa-regular fa-clock" />
                          {event.time}
                        </li>
                      </ul>
                      <h4>
                        <Link to="/event-details">{event.title}</Link>
                      </h4>
                      <p>{event.desc}</p>
                      <Link to="/event-details" className="link-btn">
                        EXPLORE MORE{" "}
                        <i className="fa-solid fa-arrow-right-long" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-lg-4 col-12">
                <EventListSidebar />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventList;
