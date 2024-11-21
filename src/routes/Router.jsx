import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import App from "../App";

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
        element: <h1>About</h1>,
      },
      {
        path: "/pages",
        element: <h1>Pages</h1>,
      },
      {
        path: "/shop",
        element: <h1>Shop</h1>,
      },
    ],
  },
]);

export default Router;
