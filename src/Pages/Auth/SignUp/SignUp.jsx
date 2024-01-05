// import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

// toastify

// social icons
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
// social icons

// authentications import start here
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
  useSignInWithGoogle,
  useSignInWithGithub,
  useSignInWithFacebook,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase/firebase.config";

// authentications import end here

// css file
import { signUp, socialIcons } from "./signUp.module.css";
import Loading from "../../../components/Loading/Loading";
import FireBaseError from "../../../components/fireBaseError/FireBaseError";
import Swal from "sweetalert2";

// css file
const SignUp = () => {
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

  /**************** createUserWithEmailAndPassword starts Here ********** */
  const [
    createUserWithEmailAndPassword,
    createUser,
    createUserLoading,
    createUserError,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);
  /****************  createUserWithEmailAndPassword ends Here ********** */

  /******************** SuccesFully submit notifications starts here ********* */

  /******************** SuccesFully submit notifications starts here ********* */

  const handleSignUp = async (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const photo = e.target.photoUrl.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    const confirmPassword = e.target.Cpassword.value.trim();

    // form validation
    if (name.length < 3) {
      Swal.fire({
        icon: "warning",
        title: "Name must be at least 3 characters.",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        showCloseButton: true,
      });
      return false;
    }
    if (photo.length < 12) {
      Swal.fire({
        icon: "warning",
        title: "PhotoUrl must be at least 12 characters.",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        showCloseButton: true,
      });
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Invalid email address.");
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

    if (password !== confirmPassword) {
      Swal.fire({
        icon: "warning",
        title: "Passwords don't match.",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        showCloseButton: true,
      });
      return false;
    }
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name, photoURL: photo });
    Swal.fire({
      position: "top center",
      icon: "success",
      title: "Sign Up Successfully!",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate(-1);
    // clear form inputs
    e.target.name.value = "";
    e.target.email.value = "";
    e.target.password.value = "";
    e.target.Cpassword.value = "";
  };
  if (createUser || googleUser || facebooksUser || githubUser) {
    Swal.fire({
      position: "top center",
      icon: "success",
      title: "Sign Up Successfully!",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate(-1);
  }
  /******************** Loading Handling starts here **************** */
  if (createUserLoading || googleLoading || githubLoading || facebookLoading) {
    return <Loading />;
  }
  /************** Loading Handling starts here ********* */
  /************** Error Handling starts here ********* */
  if (createUserError || googleError || githubError || facebookError) {
    if (createUserError) {
      return <FireBaseError errorMessege={createUserError} />;
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
  return (
    <section className="container">
      <div>
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
        <div>
          <div className={signUp}>
            <h1>Please Sign Up</h1>
            <p>
              Already have an account? <NavLink to="/login">Sign In</NavLink>
            </p>
            <form onSubmit={handleSignUp}>
              <div>
                <label htmlFor="fullname">Full Name *</label>
                <input autoFocus type="text" name="name" id="fullname" />
              </div>
              <div>
                <label htmlFor="photoUrl">Photo URL *</label>
                <input type="text" name="photoUrl" id="photoUrl" />
              </div>
              <div>
                <label htmlFor="email">Email Address *</label>
                <input type="email" name="email" id="email" />
              </div>
              <div>
                <label htmlFor="password">Password *</label>
                <input
                  min="6"
                  max="9"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
              <div>
                <label htmlFor="cpassword">Confirm password:</label>
                <input
                  min="6"
                  max="9"
                  type="password"
                  name="Cpassword"
                  id="cpassword"
                />
              </div>
              <button type="submit">Sign Up</button>
            </form>
            <div className={socialIcons}>
              <button onClick={() => signInWithGoogle()}>
                <span>
                  <FcGoogle />
                </span>{" "}
                Sign up with Google
              </button>
              <button onClick={() => signInWithFacebook()}>
                <span style={{ color: "#0d97ff" }}>
                  <FaFacebookF />
                </span>{" "}
                Sign up with Facebook
              </button>
              <button onClick={() => signInWithGithub()}>
                <span>
                  <FaGithub />
                </span>{" "}
                Sign up with Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
