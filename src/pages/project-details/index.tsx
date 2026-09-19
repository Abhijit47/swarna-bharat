import PageHeader from '@/components/pageHeader';
import { allProjects } from 'content-collections';
import { useLocation, useNavigate } from 'react-router-dom';
import ProjectDetailsPost from './projectDetailsPost';
// import ProjectDetailsSideber from "./projectDetailsSideber";

const ProjectDetails = () => {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  // pathname /project-details/awards-and-recognitions-honouring-excellence
  // remove /project-details/ from pathname
  const projectPath = pathname.replace('/project-details/', '');
  // console.log('projectPath', projectPath);

  const project = allProjects.find(
    (project) => project._meta.path === projectPath,
  );

  if (!project) {
    return (
      <div className='container'>
        <h1>Project not found</h1>
        <button
          className='theme-btn'
          onClick={() => {
            navigate(-1);
          }}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <>
      <PageHeader currentPage={project.title} title={project.title} />
      <section className='causes-details-section section-padding fix'>
        <div className='container'>
          <div className='causes-details-wrapper'>
            <div className='row g-4'>
              <div className='col-lg-12'>
                <ProjectDetailsPost />
              </div>
            </div>
            {/* <div className="row g-4">
              <div className="col-lg-7">
                <ProjectDetailsPost />
              </div>
              <div className="col-lg-5">
                <ProjectDetailsSideber />
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetails;
