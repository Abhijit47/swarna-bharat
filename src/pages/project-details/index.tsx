import PageHeader from "@/components/pageHeader";
import ProjectDetailsPost from "./projectDetailsPost";
import ProjectDetailsSideber from "./projectDetailsSideber";

const ProjectDetails = () => {
  return (
    <>
      <PageHeader currentPage="Our Causes Details" title="Our Causes Details" />
      <section className="causes-details-section section-padding fix">
        <div className="container">
          <div className="causes-details-wrapper">
            <div className="row g-4">
              <div className="col-lg-7">
                <ProjectDetailsPost />
              </div>
              <div className="col-lg-5">
                <ProjectDetailsSideber />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetails;
