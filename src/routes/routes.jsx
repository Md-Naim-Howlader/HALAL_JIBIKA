import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../components/ErrorPage/NotFound";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Jobs from "../Pages/Jobs/Jobs";

import JobDetails from "../Pages/JobDetails/JobDetails";
import ApplyJob from "../Pages/Applied_A_Job/ApplyJob";
import PostJob from "../Pages/Post_A_Job/PostJob";
import Login from "../Pages/Auth/Login/Login";
import SignUp from "../Pages/Auth/SignUp/SignUp";
import FavoriteJob from "../Pages/Favorite/FavoriteJob";
import FireBaseError from "../components/fireBaseError/FireBaseError";
import { baseURL } from "../baseURL/baseURL";
import Update_Job from "../Pages/Update_Job/Update_Job";
import Contact from "../Pages/Contact/Contact";
import LogIn from "../Pages/Auth/Login/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <FireBaseError />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch(baseURL),
        errorElement: <NotFound />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
        loader: () => fetch(baseURL),
        errorElement: <NotFound />,
      },
      {
        path: "/jobs/:postId",
        element: <JobDetails />,
        loader: ({ params }) => fetch(`${baseURL}/${params.postId}`),
        errorElement: <NotFound />,
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
        path: "/favorite",
        element: <FavoriteJob />,
      },
      {
        path: "/updateJob",
        element: <Update_Job />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <LogIn />,
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
