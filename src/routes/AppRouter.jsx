import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layouts/MainLayOut";
import Home from "../pages/Home";
import MainHome from "./../components/MainHome";
import NewsDetails from "./../components/NewsDetails";

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
