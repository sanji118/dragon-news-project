
import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Home from '../Layouts/Home';
import News from '../Layouts/News';
import Login from '../Layouts/Login';
import Register from '../Layouts/Register';
import CategoryNews from '../pages/CategoryNews';
import AuthLayout from '../Layouts/AuthLayout';

// Loader function reusable kore rakhi
const fetchNewsData = () => fetch('/demo-data/news.json');
const fetchCategoriesData = () => fetch('/demo-data/categories.json');

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        index: true, // index route use korle path='' dorkar nai
        element: <Navigate to='/category/1' replace />
      },
      {
        path: 'category/:id',
        element: <CategoryNews />,
        loader: fetchNewsData
      },
      {
        path: 'news/:id',
        element: <News />,
        loader: fetchNewsData
      }
    ]
  },
  {
    path: 'auth',
    element: <AuthLayout></AuthLayout>,
    children: [
        {
            path: '/auth/login',
            element: <Login />
        },
        {
            path: '/auth/register',
            element: <Register />
        }
    ]
  },
  
  
]);

export default Router;
