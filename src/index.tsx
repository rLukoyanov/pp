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
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
