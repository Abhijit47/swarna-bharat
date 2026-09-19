// import CommentArea from "./commentArea";

import { useLocation, useNavigate } from 'react-router-dom';

import { MDXContent } from '@content-collections/mdx/react';
import { allProjects } from 'content-collections';

const ProjectDetailsPost = () => {
  const { pathname } = useLocation();

  const navigate = useNavigate();

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

  // const data = useLoaderData<{
  //   mdx: string;
  //   readTime: number;
  //   title: string;
  //   summary: string;
  //   content: string;
  //   draft: boolean;
  // }>();

  // console.log('ProjectDetailsPost data:::', data.title);

  return (
    <>
      <div className='causes-details-post'>
        <div className='details-image'>
          <img src='/img/inner-page/project-details/details-1.jpg' alt='img' />
        </div>

        <div className='details-content'>
          <MDXContent code={project.mdx} />
        </div>
      </div>
    </>
  );

  // return (
  //   <div className='causes-details-post'>
  //     <div className='details-image'>
  //       <img src='/img/inner-page/project-details/details-1.jpg' alt='img' />
  //     </div>
  //     <div className='details-content'>
  //       <ul className='cause-list'>
  //         <li>
  //           <i className='fa-regular fa-calendar' />
  //           02 Apr 2025
  //         </li>
  //         <li>
  //           <i className='fa-regular fa-location-dot' />
  //           55 Street, 2nd Block, Melbourne, Australia
  //         </li>
  //       </ul>
  //       <h2>Give African Children A Good Education</h2>
  //       <p>
  //         Charitable efforts not only uplift individuals and communities but
  //         also foster a sense of unity, empathy, and social responsibility.
  //         Whether through small acts or large-scale initiatives, charity plays a
  //         crucial role in building a more just and compassionate world.
  //       </p>
  //       <h3>Summery</h3>
  //       <p className='mt-3'>
  //         Charitable efforts not only uplift individuals and communities but
  //         also foster a sense of unity, empathy, and social responsibility.
  //         Whether through small acts or large-scale initiatives, charity plays a
  //         crucial role in building a more just and compassionate world.
  //       </p>
  //       <div className='cause-lis-items'>
  //         <ul className='list-item'>
  //           <li>
  //             <svg
  //               xmlns='http://www.w3.org/2000/svg'
  //               width={24}
  //               height={24}
  //               viewBox='0 0 24 24'
  //               fill='none'>
  //               <g clipPath='url(#clip0_28048_230)'>
  //                 <path
  //                   d='M23.3145 3.2813C22.9614 2.92762 22.3886 2.92701 22.0355 3.2798L11.1843 14.1024L7.26917 9.85022C6.93087 9.483 6.3589 9.45919 5.99107 9.79744C5.62353 10.1357 5.6 10.708 5.93829 11.0755L10.4911 16.02C10.6578 16.2012 10.8912 16.3064 11.1372 16.3115C11.1438 16.3118 11.1502 16.3118 11.1565 16.3118C11.3956 16.3118 11.6256 16.2168 11.7951 16.048L23.3127 4.56056C23.6667 4.20783 23.6673 3.63497 23.3145 3.2813Z'
  //                   fill='#0B4E3D'
  //                 />
  //                 <path
  //                   d='M23.0955 11.0955C22.5959 11.0955 22.191 11.5004 22.191 12C22.191 17.6195 17.6195 22.191 12 22.191C6.38081 22.191 1.80905 17.6195 1.80905 12C1.80905 6.38081 6.38081 1.80905 12 1.80905C12.4996 1.80905 12.9045 1.40414 12.9045 0.904547C12.9045 0.404906 12.4996 0 12 0C5.38312 0 0 5.38312 0 12C0 18.6166 5.38312 24 12 24C18.6166 24 24 18.6166 24 12C24 11.5004 23.5951 11.0955 23.0955 11.0955Z'
  //                   fill='#0B4E3D'
  //                 />
  //               </g>
  //               <defs>
  //                 <clipPath id='clip0_28048_230'>
  //                   <rect width={24} height={24} fill='white' />
  //                 </clipPath>
  //               </defs>
  //             </svg>
  //             Empower Through Charity
  //           </li>
  //           <li>
  //             <svg
  //               xmlns='http://www.w3.org/2000/svg'
  //               width={24}
  //               height={24}
  //               viewBox='0 0 24 24'
  //               fill='none'>
  //               <g clipPath='url(#clip0_28048_230)'>
  //                 <path
  //                   d='M23.3145 3.2813C22.9614 2.92762 22.3886 2.92701 22.0355 3.2798L11.1843 14.1024L7.26917 9.85022C6.93087 9.483 6.3589 9.45919 5.99107 9.79744C5.62353 10.1357 5.6 10.708 5.93829 11.0755L10.4911 16.02C10.6578 16.2012 10.8912 16.3064 11.1372 16.3115C11.1438 16.3118 11.1502 16.3118 11.1565 16.3118C11.3956 16.3118 11.6256 16.2168 11.7951 16.048L23.3127 4.56056C23.6667 4.20783 23.6673 3.63497 23.3145 3.2813Z'
  //                   fill='#0B4E3D'
  //                 />
  //                 <path
  //                   d='M23.0955 11.0955C22.5959 11.0955 22.191 11.5004 22.191 12C22.191 17.6195 17.6195 22.191 12 22.191C6.38081 22.191 1.80905 17.6195 1.80905 12C1.80905 6.38081 6.38081 1.80905 12 1.80905C12.4996 1.80905 12.9045 1.40414 12.9045 0.904547C12.9045 0.404906 12.4996 0 12 0C5.38312 0 0 5.38312 0 12C0 18.6166 5.38312 24 12 24C18.6166 24 24 18.6166 24 12C24 11.5004 23.5951 11.0955 23.0955 11.0955Z'
  //                   fill='#0B4E3D'
  //                 />
  //               </g>
  //               <defs>
  //                 <clipPath id='clip01_28048_230'>
  //                   <rect width={24} height={24} fill='white' />
  //                 </clipPath>
  //               </defs>
  //             </svg>
  //             Healing Communities
  //           </li>
  //           <li>
  //             <svg
  //               xmlns='http://www.w3.org/2000/svg'
  //               width={24}
  //               height={24}
  //               viewBox='0 0 24 24'
  //               fill='none'>
  //               <g clipPath='url(#clip0_28048_230)'>
  //                 <path
  //                   d='M23.3145 3.2813C22.9614 2.92762 22.3886 2.92701 22.0355 3.2798L11.1843 14.1024L7.26917 9.85022C6.93087 9.483 6.3589 9.45919 5.99107 9.79744C5.62353 10.1357 5.6 10.708 5.93829 11.0755L10.4911 16.02C10.6578 16.2012 10.8912 16.3064 11.1372 16.3115C11.1438 16.3118 11.1502 16.3118 11.1565 16.3118C11.3956 16.3118 11.6256 16.2168 11.7951 16.048L23.3127 4.56056C23.6667 4.20783 23.6673 3.63497 23.3145 3.2813Z'
  //                   fill='#0B4E3D'
  //                 />
  //                 <path
  //                   d='M23.0955 11.0955C22.5959 11.0955 22.191 11.5004 22.191 12C22.191 17.6195 17.6195 22.191 12 22.191C6.38081 22.191 1.80905 17.6195 1.80905 12C1.80905 6.38081 6.38081 1.80905 12 1.80905C12.4996 1.80905 12.9045 1.40414 12.9045 0.904547C12.9045 0.404906 12.4996 0 12 0C5.38312 0 0 5.38312 0 12C0 18.6166 5.38312 24 12 24C18.6166 24 24 18.6166 24 12C24 11.5004 23.5951 11.0955 23.0955 11.0955Z'
  //                   fill='#0B4E3D'
  //                 />
  //               </g>
  //               <defs>
  //                 <clipPath id='clip02_28048_230'>
  //                   <rect width={24} height={24} fill='white' />
  //                 </clipPath>
  //               </defs>
  //             </svg>
  //             Compassion in Action
  //           </li>
  //         </ul>
  //         <ul className='list-item'>
  //           <li>
  //             <svg
  //               xmlns='http://www.w3.org/2000/svg'
  //               width={24}
  //               height={24}
  //               viewBox='0 0 24 24'
  //               fill='none'>
  //               <g clipPath='url(#clip0_28048_230)'>
  //                 <path
  //                   d='M23.3145 3.2813C22.9614 2.92762 22.3886 2.92701 22.0355 3.2798L11.1843 14.1024L7.26917 9.85022C6.93087 9.483 6.3589 9.45919 5.99107 9.79744C5.62353 10.1357 5.6 10.708 5.93829 11.0755L10.4911 16.02C10.6578 16.2012 10.8912 16.3064 11.1372 16.3115C11.1438 16.3118 11.1502 16.3118 11.1565 16.3118C11.3956 16.3118 11.6256 16.2168 11.7951 16.048L23.3127 4.56056C23.6667 4.20783 23.6673 3.63497 23.3145 3.2813Z'
  //                   fill='#0B4E3D'
  //                 />
  //                 <path
  //                   d='M23.0955 11.0955C22.5959 11.0955 22.191 11.5004 22.191 12C22.191 17.6195 17.6195 22.191 12 22.191C6.38081 22.191 1.80905 17.6195 1.80905 12C1.80905 6.38081 6.38081 1.80905 12 1.80905C12.4996 1.80905 12.9045 1.40414 12.9045 0.904547C12.9045 0.404906 12.4996 0 12 0C5.38312 0 0 5.38312 0 12C0 18.6166 5.38312 24 12 24C18.6166 24 24 18.6166 24 12C24 11.5004 23.5951 11.0955 23.0955 11.0955Z'
  //                   fill='#0B4E3D'
  //                 />
  //               </g>
  //               <defs>
  //                 <clipPath id='clip03_28048_230'>
  //                   <rect width={24} height={24} fill='white' />
  //                 </clipPath>
  //               </defs>
  //             </svg>
  //             Giving Hope Changing
  //           </li>
  //           <li>
  //             <svg
  //               xmlns='http://www.w3.org/2000/svg'
  //               width={24}
  //               height={24}
  //               viewBox='0 0 24 24'
  //               fill='none'>
  //               <g clipPath='url(#clip0_28048_230)'>
  //                 <path
  //                   d='M23.3145 3.2813C22.9614 2.92762 22.3886 2.92701 22.0355 3.2798L11.1843 14.1024L7.26917 9.85022C6.93087 9.483 6.3589 9.45919 5.99107 9.79744C5.62353 10.1357 5.6 10.708 5.93829 11.0755L10.4911 16.02C10.6578 16.2012 10.8912 16.3064 11.1372 16.3115C11.1438 16.3118 11.1502 16.3118 11.1565 16.3118C11.3956 16.3118 11.6256 16.2168 11.7951 16.048L23.3127 4.56056C23.6667 4.20783 23.6673 3.63497 23.3145 3.2813Z'
  //                   fill='#0B4E3D'
  //                 />
  //                 <path
  //                   d='M23.0955 11.0955C22.5959 11.0955 22.191 11.5004 22.191 12C22.191 17.6195 17.6195 22.191 12 22.191C6.38081 22.191 1.80905 17.6195 1.80905 12C1.80905 6.38081 6.38081 1.80905 12 1.80905C12.4996 1.80905 12.9045 1.40414 12.9045 0.904547C12.9045 0.404906 12.4996 0 12 0C5.38312 0 0 5.38312 0 12C0 18.6166 5.38312 24 12 24C18.6166 24 24 18.6166 24 12C24 11.5004 23.5951 11.0955 23.0955 11.0955Z'
  //                   fill='#0B4E3D'
  //                 />
  //               </g>
  //               <defs>
  //                 <clipPath id='clip04_28048_230'>
  //                   <rect width={24} height={24} fill='white' />
  //                 </clipPath>
  //               </defs>
  //             </svg>
  //             Together We Can
  //           </li>
  //           <li>
  //             <svg
  //               xmlns='http://www.w3.org/2000/svg'
  //               width={24}
  //               height={24}
  //               viewBox='0 0 24 24'
  //               fill='none'>
  //               <g clipPath='url(#clip0_28048_230)'>
  //                 <path
  //                   d='M23.3145 3.2813C22.9614 2.92762 22.3886 2.92701 22.0355 3.2798L11.1843 14.1024L7.26917 9.85022C6.93087 9.483 6.3589 9.45919 5.99107 9.79744C5.62353 10.1357 5.6 10.708 5.93829 11.0755L10.4911 16.02C10.6578 16.2012 10.8912 16.3064 11.1372 16.3115C11.1438 16.3118 11.1502 16.3118 11.1565 16.3118C11.3956 16.3118 11.6256 16.2168 11.7951 16.048L23.3127 4.56056C23.6667 4.20783 23.6673 3.63497 23.3145 3.2813Z'
  //                   fill='#0B4E3D'
  //                 />
  //                 <path
  //                   d='M23.0955 11.0955C22.5959 11.0955 22.191 11.5004 22.191 12C22.191 17.6195 17.6195 22.191 12 22.191C6.38081 22.191 1.80905 17.6195 1.80905 12C1.80905 6.38081 6.38081 1.80905 12 1.80905C12.4996 1.80905 12.9045 1.40414 12.9045 0.904547C12.9045 0.404906 12.4996 0 12 0C5.38312 0 0 5.38312 0 12C0 18.6166 5.38312 24 12 24C18.6166 24 24 18.6166 24 12C24 11.5004 23.5951 11.0955 23.0955 11.0955Z'
  //                   fill='#0B4E3D'
  //                 />
  //               </g>
  //               <defs>
  //                 <clipPath id='clip05_28048_230'>
  //                   <rect width={24} height={24} fill='white' />
  //                 </clipPath>
  //               </defs>
  //             </svg>
  //             Every Act Counts
  //           </li>
  //         </ul>
  //       </div>
  //       <div className='row g-4'>
  //         <div className='col-lg-6'>
  //           <div className='cause-thumb'>
  //             <img
  //               src='/img/inner-page/project-details/details-2.jpg'
  //               alt='img'
  //             />
  //           </div>
  //         </div>
  //         <div className='col-lg-6'>
  //           <div className='cause-thumb'>
  //             <img
  //               src='/img/inner-page/project-details/details-3.jpg'
  //               alt='img'
  //             />
  //           </div>
  //         </div>
  //       </div>
  //       <CommentArea />
  //     </div>
  //   </div>
  // );
};

export default ProjectDetailsPost;
