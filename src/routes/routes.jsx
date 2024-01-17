import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import FireBaseError from "../components/fireBaseError/FireBaseError";
import Home from "../Pages/Home/Home";
// import { baseURL } from "../baseURL/baseURL";
import NotFound from "../components/ErrorPage/NotFound";
import About from "../Pages/About/About";
import Jobs from "../Pages/Jobs/Jobs";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PostJob from "../Pages/Post_A_Job/PostJob";
import ApplyJob from "../Pages/Applied_A_Job/ApplyJob";
import FavoriteJob from "../Pages/Favorite/FavoriteJob";
import Update_Job from "../Pages/Update_Job/Update_Job";
import Contact from "../Pages/Contact/Contact";
import LogIn from "../Pages/Auth/LogIn/LogIn";
import SignUp from "../Pages/Auth/SignUp/SignUp";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <FireBaseError />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <NotFound />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
        errorElement: <NotFound />,
      },
      {
        path: "/jobs/:postId",
        element: <JobDetails />,
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
        path: "/favorite/:postId",
        element: <JobDetails />,
        errorElement: <NotFound />,
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
