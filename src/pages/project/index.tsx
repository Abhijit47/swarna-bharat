import PageHeader from "@/components/pageHeader";
import ProjectsGrid from "@/components/projects/projectsGrid";

const Project = () => {
  return (
    <>
      <PageHeader currentPage="Our Causes" title="Our Causes" />
      <ProjectsGrid
        isTitleShow={false}
        className="project-page"
        rowClass="g-4"
      />
    </>
  );
};

export default Project;
