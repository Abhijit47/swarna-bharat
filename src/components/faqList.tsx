import ModalVideo from "./modalVideo";

const faqItems = [
  {
    id: "collapseTwo",
    headingId: "headingTwo",
    question: "What Is Charity, And Why Is It Important ?",
    answer:
      "Charity not only helps to reduce suffering but also fosters a sense of unity and shared responsibility in society.",
    expanded: false,
  },
  {
    id: "collapseOne",
    headingId: "headingOne",
    question: "How Can I Get Involved In Charity Work ?",
    answer:
      "Charity not only helps to reduce suffering but also fosters a sense of unity and shared responsibility in society.",
    expanded: true,
  },
  {
    id: "collapsethree",
    headingId: "headingthree",
    question: "Dedication for charitable Donations ?",
    answer:
      "Charity not only helps to reduce suffering but also fosters a sense of unity and shared responsibility in society.",
    expanded: false,
  },
  {
    id: "collapsefour",
    headingId: "headingfour",
    question: "My Donations Are Going To a Charity ?",
    answer:
      "Charity not only helps to reduce suffering but also fosters a sense of unity and shared responsibility in society.",
    expanded: false,
  },
  {
    id: "collapsefive",
    headingId: "headingfive",
    question: "Is my donation actually being put to use?",
    answer:
      "Charity not only helps to reduce suffering but also fosters a sense of unity and shared responsibility in society.",
    expanded: false,
  },
];

const FaqList = ({ className }: { className?: string }) => {
  return (
    <section className={`faq-section section-padding fix ${className}`}>
      <div className="container">
        <div className="faq-wrapper">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="faq-items">
                <div className="accordion" id="accordionExample">
                  {faqItems.map((item, idx) => (
                    <div
                      className={`accordion-item${
                        idx === faqItems.length - 1 ? " mb-0" : ""
                      } wow fadeInUp`}
                      data-delay={`${0.3 + idx * 0.2}s`}
                      key={item.id}
                    >
                      <h2 className="accordion-header" id={item.headingId}>
                        <button
                          className={`accordion-button${
                            item.expanded ? "" : " collapsed"
                          }`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#${item.id}`}
                          aria-expanded={item.expanded ? "true" : "false"}
                          aria-controls={item.id}
                        >
                          {item.question}
                        </button>
                      </h2>
                      <div
                        id={item.id}
                        className={`accordion-collapse collapse${
                          item.expanded ? " show" : ""
                        }`}
                        aria-labelledby={item.headingId}
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-content">
                <div className="section-title mb-0">
                  <span className="sub-title wow fadeInUp">Our Faq</span>
                  <h2 className="wow fadeInUp" data-delay=".3s">
                    <span>E</span>xplore our FAQs for quick and helpful
                    guidance
                  </h2>
                </div>
                <p className="text wow fadeInUp" data-delay=".5s">
                  Charity not only helps to reduce suffering but also fosters a
                  sense of unity and shared responsibility in society. It
                  reminds us of the can make it your significant difference in
                  someone's life.
                </p>
                <div
                  className="faq-image wow fadeInRight"
                  data-delay="0.1"
                  data-wow-duration="2500ms"
                >
                  <img src="/img/home-1/faq.jpg" alt="img" />
                  <ModalVideo>
                    <a
                      href="#"
                      className="video-btn ripple video-popup"
                      style={{ zIndex: "99" }}
                    >
                      <i className="fa-solid fa-play" />
                    </a>
                  </ModalVideo>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqList;
