import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './layouts';
import { Main } from './pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '',
        element: <Main/>
      }
    ]
  },
]);
