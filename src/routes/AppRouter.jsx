import { createBrowserRouter, Navigate } from "react-router-dom";
import CategoryDetails from "../components/CategoryDetails";
import MainLayOut from "../layouts/MainLayOut";
import Home from "../pages/Home";
import MainHome from "./../components/MainHome";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
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
              },
            ],
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
        element: <h2>This is Sign In</h2>,
      },
      {
        path: "/signup",
        element: <h3>This is Sign Up</h3>,
      },
    ],
  },
]);

export default AppRouter;
