import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomeLayout from "../layouts/HomeLayout";
import ErrorPage from "../pages/ErrorPage/Errorpage";
import Login from "../pages/AuthPages/Login";
import Register from "../pages/AuthPages/Register";
import DeveloperResources from "../pages/Footer/DeveloperResources";
import TermsOfServices from "../pages/Footer/TermsOfServices";
import CookiesPolicy from "../pages/Footer/CookiesPolicy";
import PrivacyPolicy from "../pages/Footer/PrivacyPolicy";
import AllArticles from "../components/AllArticles";
import AddArticle from "../components/AddArticle";
import UserProfile from "../components/UserProfile";
import PrivateRoute from "../provider/PrivateRoute";
import PremiumArticles from "../components/PremiumArticles";


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
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path : "all-articles",
        Component : AllArticles
      },
      {
        path : "add-article",
        element : (
            <PrivateRoute>
                <AddArticle></AddArticle>
            </PrivateRoute>
        )
      },
      {
        path : "user-profile",
        Component : UserProfile
      },
      {
        path : "premium-articles",
        element : (
            <PrivateRoute>
                <PremiumArticles></PremiumArticles>
            </PrivateRoute>
        )
      },
      {

      }
    ],
  },
  {
    path : "terms-of-services",
    Component : TermsOfServices
  },
  {
    path : "cookies-policy",
    Component : CookiesPolicy
  },
  {
    path : "developer-resources",
    Component : DeveloperResources
  },
  {
    path : "privacy",
    Component : PrivacyPolicy
  },
 
  {
    path: "*",
    Component: ErrorPage,
  },
]);
