import React from "react";

import { createBrowserRouter, Navigate } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import HomePage from "../pages/home/HomePage";
import AboutPage from "../pages/about/AboutPage";
import ContactPage from "../pages/contact/ContactPage";

const FetchApiExample = React.lazy(
  () => import("../pages/playground/FetchApiExample")
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
      
      {
        path: "/playground",
        element: (
          <React.Suspense fallback={<>...</>}>
            <FetchApiExample />
          </React.Suspense>
        ),
      },
    ],
  },
]);

export default router;
