import { createBrowserRouter, Navigate } from "react-router-dom";
import CategoryDetails from "../components/CategoryDetails";
import Loading from "../components/Loading";
import NewsDetails from "../components/NewsDetails";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import MainLayOut from "../layouts/MainLayOut";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import MainHome from "./../components/MainHome";
import PrivateRoute from "./PrivateRoute";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <MainHome />,
            children: [
              {
                path: "",
                element: <Navigate to={`/category/01`}></Navigate>,
              },
              {
                path: "/category/:id",
                element: <CategoryDetails />,
                loader: ({ params }) =>
                  fetch(
                    `https://openapi.programming-hero.com/api/news/category/${params.id}`
                  ),
                hydrateFallbackElement: <Loading />,
              },
            ],
          },
          {
            path: "/newDetails/:id",
            element: (
              <PrivateRoute>
                <NewsDetails />
              </PrivateRoute>
            ),
            loader: ({ params }) =>
              fetch(
                `https://openapi.programming-hero.com/api/news/${params.id}`
              ),
            hydrateFallbackElement: <Loading />,
          },
        ],
      },
      {
        path: "/about",
        element: <h2>This is About Section</h2>,
      },
      {
        path: "/career",
        element: <h3>Carrer section</h3>,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default AppRouter;
