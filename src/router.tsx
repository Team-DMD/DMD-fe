import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './layouts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '',
        element: <div>dssd</div>
      }
    ]
  },
]);
