import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from './routes/homepage/Homepage';
import DashboardPage from './routes/dashboardPage/Dashboardpage';
import ChatPage from './routes/chatPage/ChatPage';

import RootLayout from "./layouts/rootLayout/rootLayout";
import DashboardLayout from "./layouts/dashboardLayout/dashboardLayout";
import SignInPage from './routes/sigInPage/SignInPage';
import SignUpPage from './routes/signUpPage/SignUpPage';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />
      },
      {
        path: "/sign-in/*",
        element: <SignInPage /> // ✅ Fixed
      },
      {
        path: "/sign-up/*",
        element: <SignUpPage /> // ✅ Fixed
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />
          },
          {
            path: "/dashboard/chats/:id",
            element: <ChatPage />
          }
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
