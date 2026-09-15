import PageHeader from "@/components/pageHeader";
import EventDetailsSidebar from "./eventDetailsSidebar";

const EventDetails = () => {
  return (
    <>
      <PageHeader currentPage="Event Details" title="Event Details" />
      <section className="event-details-section section-padding fix">
        <div className="container">
          <div className="event-details-wrapper">
            <div className="row g-4">
              <div className="col-lg-8 col-12">
                <div className="event-details-post">
                  <div className="event-details-image">
                    <img
                      src="/img/inner-page/event-details/details-1.jpg"
                      alt="img"
                    />
                  </div>
                  <div className="event-details-content">
                    <h3>Rebecca's New Album Aid for the Needy</h3>
                    <ul className="event-list">
                      <li>
                        <i className="fa-regular fa-location-dot" />
                        New York, USA
                      </li>
                      <li>
                        <i className="fa-regular fa-calendar-days" />
                        22, Nov 2025
                      </li>
                      <li>
                        <i className="fa-regular fa-clock" />
                        09:00 PM
                      </li>
                    </ul>
                    <p>
                      Consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore of magna aliqua. Ut enim ad
                      minim veniam, made of owl the quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea dolor commodo
                      consequat. Duis aute irure and dolor in reprehenderit.
                    </p>
                    <p className="mt-3 mb-3">
                      The is ipsum dolor sit amet consectetur adipiscing elit.
                      Fusce eleifend porta arcu In hac habitasse the is platea
                      augue thelorem turpoi dictumst. In lacus libero faucibus
                      at malesuada sagittis placerat eros sed istincidunt augue
                      ac ante rutrum sed the is sodales augue consequat.
                    </p>
                    <p className="mb-3">
                      Nulla facilisi. Vestibulum tristique sem in eros eleifend
                      imperdiet. Donec quis convallis neque. In id lacus
                      pulvinar lacus, eget vulputate lectus. Ut viverra bibendum
                      lorem, at tempus nibh mattis in. Sed a massa eget lacus
                      consequat auctor
                    </p>
                    <h3>Requirements for the Event</h3>
                    <p className="mt-3 mb-3">
                      Consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore of magna aliqua. Ut enim ad
                      minim veniam, made of owl the quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea dolor commodo
                      consequat. Duis aute irure and dolor in reprehenderit.
                    </p>
                    <p className="mb-4">
                      The is ipsum dolor sit amet consectetur adipiscing elit.
                      Fusce eleifend porta arcu In hac habitasse the is platea
                      augue thelorem turpoi dictumst. In lacus libero faucibus
                      at malesuada sagittis placerat eros sed istincidunt augue
                      ac ante rutrum sed the is sodales augue consequat.
                    </p>
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="details-thumb">
                          <img
                            src="/img/inner-page/event-details/details-2.jpg"
                            alt="img"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="details-thumb">
                          <img
                            src="/img/inner-page/event-details/details-3.jpg"
                            alt="img"
                          />
                        </div>
                      </div>
                    </div>
                    <p className="mt-4">
                      The is ipsum dolor sit amet consectetur adipiscing elit.
                      Fusce eleifend porta arcu In hac habitasse the is platea
                      augue thelorem turpoi dictumst. In lacus libero faucibus
                      at malesuada sagittis placerat eros sed istincidunt augue
                      ac ante rutrum sed the is sodales augue consequat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <EventDetailsSidebar />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventDetails;
