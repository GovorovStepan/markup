import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/Main';
import Contact from './pages/Contact';
import Collection from './pages/Collection';
import Blog from './pages/Blog';
import './index.css';
import 'normalize.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/collection',
    element: <Collection />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
]);

root.render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals(console.log);