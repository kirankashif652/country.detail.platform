
import { createHashRouter } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import CountryDetails from './pages/CountryDetails.jsx';
import NotFound from './pages/NotFound.jsx';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'country/:name', element: <CountryDetails /> },
      { path: '*', element: <NotFound /> }
    ]
  }
]);

export default router;

