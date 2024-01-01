import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../components/ErrorPage/NotFound";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Jobs from "../Pages/Jobs/Jobs";
import Favorite from "../Pages/Favorite/Favorite";
import Contact from "../Pages/Contact/Contact";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
