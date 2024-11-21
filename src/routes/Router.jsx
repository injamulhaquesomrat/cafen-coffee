import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import App from "../App";
import About from "../pages/About";
import Shop from "../pages/Shop";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/pages",
        element: <h1>Pages</h1>,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
  },
]);

export default Router;
