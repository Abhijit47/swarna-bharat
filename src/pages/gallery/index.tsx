import fjGallery from 'flickr-justified-gallery';
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-video.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lightgallery.css';

// import plugins if you need
// import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgVideo from 'lightgallery/plugins/video';
import lgZoom from 'lightgallery/plugins/zoom';

import PageHeader from '@/components/pageHeader';
import { useEffect } from 'react';

const images = [
  {
    image: '/masonary/1.jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/2.jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/3.jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/4.jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/5.jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/6.jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/7.jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/8.jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/9.jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/10.jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/11.jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/12.jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/13.jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/14.jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/15.jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/16.jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/17.jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/18.jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/19.jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/20.jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/compressed-Picture1.webp',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/compressed-Picture2.webp',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/compressed-Picture3.webp',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/compressed-Picture4.webp',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/compressed-Picture5.webp',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/compressed-Picture6.webp',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/compressed-Picture7.webp',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/compressed-Picture8.webp',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/compressed-Picture9.webp',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/compressed-Picture10.webp',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/compressed-Picture11.webp',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/compressed-Picture12.webp',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/compressed-Picture13.webp',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/compressed-Picture14.webp',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/compressed-Picture15.webp',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/compressed-Picture16.webp',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/compressed-Picture17.webp',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/compressed-Picture18.webp',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/compressed-Picture19.webp',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/compressed-Picture20.webp',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/compressed-Picture21.webp',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/compressed-Picture22.webp',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/compressed-Picture23.webp',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/compressed-Picture24.webp',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/compressed-Picture25.webp',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/masonary/compressed-Picture26.webp',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
];

export default function GalleryPage() {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };

  useEffect(() => {
    fjGallery(document.querySelectorAll('.gallery'), {
      itemSelector: '.gallery__item',
      rowHeight: 180,
      lastRow: 'start',
      gutter: 2,
      rowHeightTolerance: 0.1,
      calculateItemsHeight: false,
    });
  }, []);

  return (
    <>
      <PageHeader currentPage='Gallery' title='Gallery' />

      <section className='event-section-4 section-padding fix'>
        <div className='container px-2'>
          <LightGallery
            onInit={onInit}
            plugins={[lgZoom, lgVideo]}
            mode='lg-fade'
            pager={false}
            thumbnail={true}
            galleryId={'nature'}
            autoplayFirstVideo={false}
            elementClassNames={'gallery'}
            mobileSettings={{
              controls: false,
              showCloseIcon: false,
              download: false,
              rotate: false,
            }}>
            {images.map((item, index) => (
              <a
                key={index}
                data-lg-size='1600-1067'
                data-pinterest-text='Pin it3'
                data-tweet-text='lightGallery slide  4'
                className='gallery__item'
                style={{ width: '100%' }}
                data-src={item.image}
                // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@camadams' >Cam Adams</a></h4><p>Location - <a href='https://unsplash.com/s/photos/banff%2C-canada'>Banff, Canada</a> Lake along jagged mountains</p>"
              >
                <img
                  alt={`Gallery Image ${index + 1}`}
                  src={item.image}
                  height={'185px'}
                  width={'100%'}
                />
              </a>
            ))}
            {/* <a href='img/img1.jpg'>
            <img alt='img1' src='img/thumb1.jpg' />
          </a>
          <a href='img/img2.jpg'>
            <img alt='img2' src='img/thumb2.jpg' />
          </a>
          ... */}
          </LightGallery>
        </div>
      </section>
    </>
  );
}
