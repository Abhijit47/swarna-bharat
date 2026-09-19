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
    image: '/imgs/WhatsApp Image 2026-07-30 at 10.08.17 PM.jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/imgs/WhatsApp Image 2026-07-30 at 10.08.17 PM (1).jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/imgs/WhatsApp Image 2026-07-30 at 10.08.17 PM (2).jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/imgs/WhatsApp Image 2026-07-30 at 10.08.18 PM.jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/imgs/WhatsApp Image 2026-07-30 at 10.08.19 PM (1).jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/imgs/WhatsApp Image 2026-07-30 at 10.08.19 PM.jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/imgs/WhatsApp Image 2026-07-30 at 10.08.20 PM (2).jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/imgs/WhatsApp Image 2026-07-30 at 10.08.20 PM.jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/imgs/WhatsApp Image 2026-07-30 at 10.08.21 PM (1).jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/imgs/WhatsApp Image 2026-07-30 at 10.08.21 PM.jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/imgs/WhatsApp Image 2026-07-30 at 10.08.22 PM (2).jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/imgs/WhatsApp Image 2026-07-30 at 10.08.22 PM.jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/imgs/WhatsApp Image 2026-07-30 at 10.08.23 PM (1).jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/imgs/WhatsApp Image 2026-07-30 at 10.08.23 PM (2).jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/imgs/WhatsApp Image 2026-07-30 at 10.08.23 PM.jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/imgs/WhatsApp Image 2026-09-10 at 12.49.54 PM.jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/imgs/WhatsApp Image 2026-09-10 at 12.59.58 PM (2).jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/imgs/WhatsApp Image 2026-09-10 at 12.59.58 PM.jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/imgs/WhatsApp Image 2026-09-10 at 12.59.59 PM (1).jpeg',
    title: 'Child Educations',
    subtitle: 'Charity & Funding',
    shape: '/img/home-1/project/shape.png',
    contentClass: '',
  },
  {
    image: '/imgs/WhatsApp Image 2026-09-10 at 12.59.59 PM (2).jpeg',
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
                  height={'180px'}
                  width={'auto'}
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
