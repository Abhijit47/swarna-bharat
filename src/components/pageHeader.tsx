import { Link } from 'react-router-dom';

const PageHeader = ({
  title,
  currentPage,
  imgSrc = '/about.png',
}: {
  title: string;
  currentPage: string;
  imgSrc?: string;
}) => {
  return (
    <div
      className='breadcrumb-wrapper fix bg-cover'
      style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top left',
      }}>
      <div className='container'>
        <div className='page-heading'>
          <div className='breadcrumb-sub-title'>
            <h1 className='wow fadeInUp' data-delay='.3s'>
              {title}
            </h1>
          </div>
          <ul className='breadcrumb-items wow fadeInUp' data-delay='.5s'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <i className='fa-solid fa-chevron-right' />
            </li>
            <li>{currentPage}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
