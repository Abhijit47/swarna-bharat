// import NewsCommentDisplay from '@/components/news/newsCommentDisplay';
// import NewsCommentForm from '@/components/news/newsCommentForm';
import PageHeader from '@/components/pageHeader';
import { loadPosts, type loadAPost } from '@/data/data-loaders';
import { MDXContent } from '@content-collections/mdx/react';
import { Link, useLoaderData } from 'react-router-dom';

export default function BlogDetails() {
  const post = useLoaderData<typeof loadAPost>();

  return (
    <>
      <PageHeader currentPage={post.title} title={post.title} />
      <section className='news-details-section section-padding fix'>
        <div className='container'>
          <div className='news-details-wrapper'>
            <div className='row g-4'>
              <div className='col-lg-8 col-12'>
                <div className='news-details-post'>
                  <div className='news-details-image'>
                    <img
                      src='/img/inner-page/news-details/details-1.jpg'
                      alt='img'
                    />
                  </div>
                  <div className='news-details-content'>
                    <MDXContent code={post.mdx} />
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-12'>
                <BlogSidebar />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function BlogSidebar() {
  const post = useLoaderData<typeof loadAPost>();

  const recents = loadPosts();

  return (
    <div className='main-sideber'>
      {/* <div className='single-sidebar-widget'>
        <div className='wid-title'>
          <h4>Search</h4>
        </div>
        <div className='search-widget'>
          <form action='#'>
            <input type='text' placeholder='Search here' />
            <button type='submit'>
              <i className='fa-solid fa-magnifying-glass' />
            </button>
          </form>
        </div>
      </div> */}
      {/* <div className='single-sidebar-widget'>
        <div className='wid-title'>
          <h4>Categories</h4>
        </div>
        <div className='news-widget-categories'>
          <ul>
            {categories.map((cat, index) => (
              <li key={index}>
                <Link to={'/news-details'}>{cat.name}</Link>
                <span>{cat.count.toString().padStart(2, '0')}</span>
              </li>
            ))}
          </ul>
        </div>
      </div> */}

      <div className='single-sidebar-widget'>
        <div className='wid-title'>
          <h4>Recent Post</h4>
        </div>
        <div className='recent-post-area'>
          {recents.map((post, index) => (
            <div className='recent-items' key={index}>
              <div className='recent-thumb'>
                <img src={post.cover} alt={post.title} width={80} height={80} />
              </div>
              <div className='recent-content'>
                <h6>
                  <Link to={`/blogs/${post._meta.path}`}>{post.title}</Link>
                </h6>
                <ul>
                  <li>{new Date().toLocaleDateString()}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='single-sidebar-widget mb-0'>
        <div className='wid-title'>
          <h4>Tags</h4>
        </div>
        <div className='news-widget-categories'>
          <div className='tagcloud'>
            {post.tags.map((tag, index) => (
              <Link key={index} to={`/blogs/${post._meta.path}`}>
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
