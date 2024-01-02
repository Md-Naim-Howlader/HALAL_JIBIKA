import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../components/ErrorPage/NotFound";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Jobs from "../Pages/Jobs/Jobs";

import Contact from "../Pages/Contact/Contact";
import JobDetails from "../Pages/JobDetails/JobDetails";
import ApplyJob from "../Pages/Applied_A_Job/ApplyJob";
import PostJob from "../Pages/Post_A_Job/PostJob";
import Login from "../Pages/Auth/Login/Login";
import SignUp from "../Pages/Auth/SignUp/SignUp";
import FavoriteJob from "../Pages/Favorite/FavoriteJob";
import FireBaseError from "../components/fireBaseError/FireBaseError";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <FireBaseError />,
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
        path: "/postJob",
        element: <PostJob />,
      },
      {
        path: "/applyJob",
        element: <ApplyJob />,
      },
      {
        path: "/jobs/:postId",
        element: <JobDetails />,
      },
      {
        path: "/favorite",
        element: <FavoriteJob />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
        errorElement: <FireBaseError />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
        errorElement: <FireBaseError />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
