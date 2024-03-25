import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/login-page/LoginPage.tsx';
import ForgotPasswordPage from './pages/forgot-password-page/ForgotPasswordPage.tsx';

const router = createBrowserRouter([
  {
    path: '/login/',
    element: <LoginPage />,
  },
  {
    path: '/login/forgot-password/',
    element: <ForgotPasswordPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
