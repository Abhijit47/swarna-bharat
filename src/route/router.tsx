import { loadAPost, loadAProject, loadPosts } from '@/data/data-loaders';
import InnerLayout from '@/layout/innerLayout';
import LayoutThree from '@/layout/layoutThree';
import LayoutTwo from '@/layout/layoutTwo';
import RootLayout from '@/layout/root';
import Error from '@/pages/404';
import About from '@/pages/about';
import AwardsPage from '@/pages/awards';
import BecomeVolounteer from '@/pages/become-volounteer';
import BlogDetails from '@/pages/blog-details';
import Contact from '@/pages/contact';
import Donation from '@/pages/donation';
import DonationDetails from '@/pages/donation-details';
import DonationNow from '@/pages/donation-now';
import Event from '@/pages/event';
import EventDetails from '@/pages/event-details';
import EventList from '@/pages/event-list';
import Faq from '@/pages/faq';
import GalleryPage from '@/pages/gallery';
import Home from '@/pages/home';
import HomeThree from '@/pages/homeThree';
import HomeTwo from '@/pages/homeTwo';
import NewsDetails from '@/pages/news-details';
import NewsGrid from '@/pages/news-grid';
import News from '@/pages/news/page';
import Pricing from '@/pages/pricing';
import Project from '@/pages/project';
import ProjectDetails from '@/pages/project-details';
import ServicesPage from '@/pages/services';
import VisionAndMissionPage from '@/pages/vision-and-mission';
import Volounteer from '@/pages/volounteer';
import VolounteerDetails from '@/pages/volounteer-details';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: loadPosts,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/gallery',
        element: <GalleryPage />,
      },
      {
        path: '/project-details/:path',
        element: <ProjectDetails />,
        loader: loadAProject,
      },
      {
        path: '/vision-and-mission',
        element: <VisionAndMissionPage />,
      },
      {
        path: '/awards',
        element: <AwardsPage />,
      },
      {
        path: '/services',
        element: <ServicesPage />,
      },
      {
        path: '/blogs/:path',
        element: <BlogDetails />,
        loader: loadAPost,
      },
    ],
  },
  {
    path: '/home-2',
    element: <LayoutTwo />,
    children: [
      {
        path: '/home-2',
        element: <HomeTwo />,
      },
    ],
  },
  {
    path: '/home-3',
    element: <LayoutThree />,
    children: [
      {
        path: '/home-3',
        element: <HomeThree />,
      },
    ],
  },
  {
    path: '/',
    element: <InnerLayout />,
    children: [
      // {
      //   path: '/about',
      //   element: <About />,
      // },
      {
        path: '/project',
        element: <Project />,
      },
      // {
      //   path: '/project-details',
      //   element: <ProjectDetails />,
      // },
      {
        path: '/become-volounteer',
        element: <BecomeVolounteer />,
      },
      {
        path: '/volounteer',
        element: <Volounteer />,
      },
      {
        path: '/volounteer-details',
        element: <VolounteerDetails />,
      },
      {
        path: '/event',
        element: <Event />,
      },
      {
        path: '/event-details',
        element: <EventDetails />,
      },
      {
        path: '/event-list',
        element: <EventList />,
      },
      {
        path: '/donation',
        element: <Donation />,
      },
      {
        path: '/donation-now',
        element: <DonationNow />,
      },
      {
        path: '/donation-details',
        element: <DonationDetails />,
      },
      {
        path: '/pricing',
        element: <Pricing />,
      },
      {
        path: '/faq',
        element: <Faq />,
      },
      {
        path: '/404',
        element: <Error />,
      },
      {
        path: '/news-grid',
        element: <NewsGrid />,
      },
      {
        path: '/news',
        element: <News />,
      },
      {
        path: '/news-details',
        element: <NewsDetails />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);
