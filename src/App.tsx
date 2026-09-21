import '@/assets/css/additional.css';
import '@/assets/css/animate.css';
import '@/assets/css/extra-styles.css';
import '@/assets/scss/main.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { RouterProvider } from 'react-router-dom';
import BackTop from './components/backTop';
import MouseCursor from './components/mouseCursor';
import Preloader from './components/preloader';
import { router } from './route/router';

const App = () => {
  return (
    <>
      <Preloader />
      <BackTop />
      <MouseCursor />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
