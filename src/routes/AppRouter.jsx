import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layouts/MainLayOut";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        path: "/about",
        element: <h2>This is About Section</h2>,
      },
      {
        path: "/carrer",
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
