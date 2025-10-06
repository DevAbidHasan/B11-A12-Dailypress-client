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
import Dashboard from "../components/Dashboard/Dashboard";
import AllUsers from "../components/Dashboard/AllUsers";
import AddPublisher from "../components/Dashboard/AddPublisher";
import AllDashboardArticles from "../components/Dashboard/AllDashboardArticles";
import ArticleDetails from "../components/ArticleDetails";
import Subscriptions from "../pages/ExtraPages/Subscriptions";
import MyArticles from "../pages/ExtraPages/MyArticles";

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
        path: "my-articles/:email",
        loader : ({params}) => fetch(`http://localhost:3000/myArticles/${params.email}`),
        element  : (
          <PrivateRoute>
            <MyArticles></MyArticles>
          </PrivateRoute>
        )
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
        path: "all-articles",
        loader: () => fetch("https://b11-a12-dailypress-server.vercel.app/articles/accepted"),
        Component: AllArticles,
      },
      {
        path: "add-article",
        element: (
          <PrivateRoute>
            <AddArticle></AddArticle>
          </PrivateRoute>
        ),
      },
      {
        path: "user-profile/:email",
        loader : ({params}) => fetch(`http://localhost:3000/user/${params.email}`),
        element : (
          <PrivateRoute>
            <UserProfile></UserProfile>
          </PrivateRoute>
        )
      },
      {
        path: "premium-articles",
        element: (
          <PrivateRoute>
            <PremiumArticles></PremiumArticles>
          </PrivateRoute>
        ),
      },
      {
        path: "subscription",
        Component: Subscriptions,
      },
      {
        path: "/article/:id",
        loader: ({ params }) =>
          fetch(`https://b11-a12-dailypress-server.vercel.app/article/${params.id}`),
        element: (
          <PrivateRoute>
            <ArticleDetails></ArticleDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    Component: Dashboard,
    children: [
      {
        index: true,
        Component: AllUsers,
      },
      {
        path: "article/:id",
        loader: ({ params }) =>
          fetch(
            `https://b11-a12-dailypress-server.vercel.app/article-details/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <ArticleDetails></ArticleDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "all-users",
        Component: AllUsers,
      },
      {
        path: "all-articles",
        Component: AllDashboardArticles,
      },
      {
        path: "add-publisher",
        Component: AddPublisher,
      },
    ],
  },
  {
    path: "terms-of-services",
    Component: TermsOfServices,
  },
  {
    path: "cookies-policy",
    Component: CookiesPolicy,
  },
  {
    path: "developer-resources",
    Component: DeveloperResources,
  },
  {
    path: "privacy",
    Component: PrivacyPolicy,
  },

  {
    path: "*",
    Component: ErrorPage,
  },
]);
