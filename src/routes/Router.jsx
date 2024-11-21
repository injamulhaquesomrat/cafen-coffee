import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import App from "../App";
import About from "../pages/About";
import Shop from "../pages/Shop";
import Contact from "../pages/Contact";
import Events from "../pages/Events";
import HomeTwo from "../pages/HomeTwo";
import Menu from "../pages/Menu";
import Location from "../pages/Location";
import Blog from "../pages/Blog";

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
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/home-2",
        element: <HomeTwo />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/location",
        element: <Location />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

export default Router;
