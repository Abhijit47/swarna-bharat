import { Link } from "react-router-dom";

const teamData = [
  {
    image: "/img/home-1/team/01.jpg",
    name: "Darrell Steward",
    role: "Software Developer",
    delay: ".2s",
    socialLinks: [
      { icon: "fa-brands fa-twitter", url: "#" },
      { icon: "fa-brands fa-whatsapp", url: "#" },
      { icon: "fa-brands fa-instagram", url: "#" },
      { icon: "fas fa-paper-plane", url: "#" },
    ],
  },
  {
    image: "/img/home-1/team/02.jpg",
    name: "Courtney Henry",
    role: "Software Developer",
    delay: ".4s",
    socialLinks: [
      { icon: "fa-brands fa-twitter", url: "#" },
      { icon: "fa-brands fa-whatsapp", url: "#" },
      { icon: "fa-brands fa-instagram", url: "#" },
      { icon: "fas fa-paper-plane", url: "#" },
    ],
  },
  {
    image: "/img/home-1/team/03.jpg",
    name: "Annette Black",
    role: "Software Developer",
    delay: ".6s",
    socialLinks: [
      { icon: "fa-brands fa-twitter", url: "#" },
      { icon: "fa-brands fa-whatsapp", url: "#" },
      { icon: "fa-brands fa-instagram", url: "#" },
      { icon: "fas fa-paper-plane", url: "#" },
    ],
  },
  {
    image: "/img/home-1/team/04.jpg",
    name: "Kristin Watson",
    role: "Software Developer",
    delay: ".8s",
    socialLinks: [
      { icon: "fa-brands fa-twitter", url: "#" },
      { icon: "fa-brands fa-whatsapp", url: "#" },
      { icon: "fa-brands fa-instagram", url: "#" },
      { icon: "fas fa-paper-plane", url: "#" },
    ],
  },
];

const Teams = () => {
  return (
    <section className="team-section section-padding fix pb-0">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-title wow fadeInUp">Team Members</span>
          <h2 className="wow fadeInUp" data-delay=".3s">
            <span>M</span>eet The Optimistic volunteers
          </h2>
        </div>
        <div className="row">
          {teamData.map((member, index) => (
            <div
              key={index}
              className={`col-xl-3 col-lg-6 col-md-6 wow fadeInUp`}
              data-delay={member.delay}
            >
              <div className="team-card-items">
                <div className="team-image">
                  <img src={member.image} alt="img" />
                </div>
                <div className="team-content">
                  <h5>
                    <Link to="/volounteer-details">{member.name}</Link>
                  </h5>
                  <p>{member.role}</p>
                  <div className="social-icon">
                    {member.socialLinks.map((link, i) => (
                      <a href={link.url} key={i}>
                        <i className={link.icon} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
