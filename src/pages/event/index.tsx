import PageHeader from "@/components/pageHeader";
import { Link } from "react-router-dom";


// eslint-disable-next-line react-refresh/only-export-components
export const eventsData = [
  {
    image: "/img/home-2/event/02.jpg",
    date: "22, Nov 2025",
    location: "New york, USA",
    time: "09:00 PM",
    title: "Rebecca's Charity Showcases Nation's",
    desc: "Embarrassing hidden in middle of All the lorem Ipsum on the Internet to repeat",
  },
  {
    image: "/img/home-2/event/03.jpg",
    date: "22, Nov 2025",
    location: "New york, USA",
    time: "09:00 PM",
    title: "Rebecca's Charity Album A Brilliant.",
    desc: "Embarrassing hidden in middle of All the lorem Ipsum on the Internet to repeat",
  },
  {
    image: "/img/home-2/event/04.jpg",
    date: "22, Nov 2025",
    location: "New york, USA",
    time: "09:00 PM",
    title: "A Nation's Benevolence <br /> Displayed",
    desc: "Embarrassing hidden in middle of All the lorem Ipsum on the Internet to repeat",
  },
  {
    image: "/img/home-2/event/05.jpg",
    date: "22, Nov 2025",
    location: "New york, USA",
    time: "09:00 PM",
    title: "Rebecca's Charity Showcases Nation's",
    desc: "Embarrassing hidden in middle of All the lorem Ipsum on the Internet to repeat",
  },
  {
    image: "/img/home-2/event/06.jpg",
    date: "22, Nov 2025",
    location: "New york, USA",
    time: "09:00 PM",
    title: "Rebecca's Album Supports <br /> Needy",
    desc: "Embarrassing hidden in middle of All the lorem Ipsum on the Internet to repeat",
  },
  {
    image: "/img/home-2/event/07.jpg",
    date: "22, Nov 2025",
    location: "New york, USA",
    time: "09:00 PM",
    title: "Rebecca's New Album Aid for the Needy",
    desc: "Embarrassing hidden in middle of All the lorem Ipsum on the Internet to repeat",
  },
];

const Event = () => {
  return (
    <>
      <PageHeader currentPage="Event" title="Event" />
      <section className="event-section-4 section-padding fix">
        <div className="container">
          <div className="row g-4">
            {eventsData.map((event, index) => (
              <div className="col-xl-4 col-lg-6 col-md-6" key={index}>
                <div className="event-inner-items">
                  <div className="event-image">
                    <img src={event.image} alt={event.title} />
                    <span className="event-tag">{event.date}</span>
                  </div>
                  <div className="event-content">
                    <ul className="event-list">
                      <li>
                        <i className="fa-regular fa-location-dot" />{" "}
                        {event.location}
                      </li>
                      <li>
                        <i className="fa-regular fa-clock" /> {event.time}
                      </li>
                    </ul>
                    <h4>
                      <Link
                        to={"/event-details"}
                        dangerouslySetInnerHTML={{ __html: event.title }}
                      />
                    </h4>
                    <p>{event.desc}</p>
                    <Link to={"/event-details"} className="link-btn">
                      EXPLORE MORE{" "}
                      <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Event;
