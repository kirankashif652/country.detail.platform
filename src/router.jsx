import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import CountryDetails from './pages/CountryDetails';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/country/:name', element: <CountryDetails /> },
  { path: '*', element: <NotFound /> }
]);

export default router;
