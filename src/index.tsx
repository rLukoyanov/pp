import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import LoginPage from './routes/LoginPage';
import ErrorPage from './routes/ErrorPage';

import './styles.scss';
import MainPage from './routes/MainPage';
import VacanciesPage from './routes/VacanciesPage';
import { OfferPage } from './routes/OfferPage';
import ProfilePage from './routes/ProfilePage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <App>
        <MainPage />
      </App>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: 'login',
    element: <LoginPage />,
  },
  {
    path: 'offers',
    element: (
      <App>
        <VacanciesPage />
      </App>
    ),
  },
  {
    path: 'offers/:offerId',
    loader: ({ params }) => {
      return params.offerId;
    },
    element: (
      <App>
        <OfferPage />
      </App>
    ),
  },
  {
    path: 'profile',
    element: (
      <App>
        <ProfilePage />
      </App>
    ),
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
