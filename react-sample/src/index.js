import React from 'react'
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Link
  } from "react-router-dom";
import routes from './routes'
import GitHubUserData from './GitHubUserData'

const router = createBrowserRouter(routes);

createRoot(document.getElementById("app")).render(
    <RouterProvider router={router} />
);