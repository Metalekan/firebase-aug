import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Auth from "./components/Auth.jsx";
import Database from "./components/Database.jsx";
import GoogleAuth from "./components/GoogleAuth.jsx";
import Contact from "./components/Contact.jsx";
import Profile from "./components/Profile.jsx";
import Errorpage from "./components/Errorpage.jsx";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "auth",
        element: <Auth />,
      },
      {
        path: "database",
        element: <Database />,
      },
      {
        path: "google",
        element: <GoogleAuth />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "*",
        element: <Errorpage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);
