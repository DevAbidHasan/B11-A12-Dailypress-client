import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomeLayout from "../layouts/HomeLayout";
import ErrorPage from "../pages/ErrorPage/Errorpage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomeLayout,
      },
      {
        path: "about",
        element: <h2>this is about page</h2>,
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);
