import { NavLink, useNavigate } from "react-router-dom";
import { signUp, socialIcons } from "./signIn.module.css";

// social icons
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";

// social icons

// authentications
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
  useSignInWithGithub,
  useSignInWithFacebook,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase/firebase.config";
import FireBaseError from "../../../components/fireBaseError/FireBaseError";
import Loading from "../../../components/Loading/Loading";
import Swal from "sweetalert2";
const LogIn = () => {
  // sign in email password
  const [signInWithEmailAndPassword, user, userLoading, userError] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  /**************** Google signup starts Here ***************** */
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  /**************** Google signup ends Here ********** */
  /**************** github signup starts Here ***************/
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  /**************** github signup ends Here ********** */
  /**************** githun signup starts Here ********** */
  const [signInWithFacebook, facebooksUser, facebookLoading, facebookError] =
    useSignInWithFacebook(auth);
  /**************** github signup ends Here ********** */

  /******************** SuccesFully submit notifications starts here ********* */

  /******************** SuccesFully submit notifications starts here ********* */

  if (user || googleUser || facebooksUser || githubUser) {
    Swal.fire({
      position: "top center",
      icon: "success",
      title: "Login Succesfully!",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate(-1);
  }
  /******************** Loading Handling starts here **************** */
  if (userLoading || googleLoading || githubLoading || facebookLoading) {
    return <Loading />;
  }
  /************** Loading Handling starts here ********* */
  /************** Error Handling starts here ********* */
  if (userError || googleError || githubError || facebookError) {
    if (userError) {
      return <FireBaseError errorMessege={userError} />;
    }
    if (googleError) {
      return <FireBaseError errorMessege={googleError} />;
    }

    if (githubError) {
      return <FireBaseError errorMessege={githubError} />;
    }
    if (facebookError) {
      return <FireBaseError errorMessege={facebookError} />;
    }
  }
  /******************** Error Handling  ends ********* */

  // handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    // form validation
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      Swal.fire({
        icon: "warning",
        title: "Invalid email address",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        showCloseButton: true,
      });
      return false;
    }

    if (password.length < 6) {
      Swal.fire({
        icon: "warning",
        title: "Password must be at least 6 characters.",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        showCloseButton: true,
      });
      return false;
    }

    signInWithEmailAndPassword(email, password);
    Swal.fire({
      position: "top center",
      icon: "success",
      title: "Login Succesfully",
      showConfirmButton: false,
      timer: 1500,
    });

    navigate(-1);
  };

  return (
    <section>
      <div className="container">
        <div>
          <button
            style={{
              border: "none",
              marginTop: "20px",
              padding: "8px 10px",
              background: "#198754",
              color: "#fff",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => navigate(-1)}
          >
            {" "}
            <FaArrowLeft /> Go Back
          </button>
        </div>
        <div style={{ padding: "50px 0" }}>
          <div className={signUp}>
            <h1>Log In</h1>
            <p>
              Don&apos;t have an account?{" "}
              <NavLink to="/signUp">Create a free account</NavLink>
            </p>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">Email Address:</label>
                <input type="email" name="email" id="email" />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input
                  min="6"
                  max="9"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>

              <button type="submit">Log In</button>
            </form>
            <div className={socialIcons}>
              <button onClick={() => signInWithGoogle()}>
                <span>
                  <FcGoogle />
                </span>{" "}
                Log in with Google
              </button>
              <button onClick={() => signInWithFacebook()}>
                <span style={{ color: "#0d97ff" }}>
                  <FaFacebookF />
                </span>{" "}
                Log in with Facebook
              </button>
              <button onClick={() => signInWithGithub()}>
                <span>
                  <FaGithub />
                </span>{" "}
                Log in with Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
