import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/Main';
import Collection from './pages/Collection';
import Blog from './pages/Blog';
import './index.css';
import 'normalize.css';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './context/AppContext';
import India from './pages/blogs/India';
import Penguin from './pages/blogs/Penguin';
import Life from './pages/blogs/Life';
import Moment from './pages/blogs/Moment';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/collection',
    element: <Collection />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/blog/india',
    element: <India />,
  },
  {
    path: '/blog/penguin',
    element: <Penguin />,
  },
  {
    path: '/blog/life',
    element: <Life />,
  },
  {
    path: '/blog/moment',
    element: <Moment />,
  },
]);

root.render(
  <React.StrictMode>
    <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
  </React.StrictMode>
);

reportWebVitals(console.log);