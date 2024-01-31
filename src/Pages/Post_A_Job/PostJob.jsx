import Swal from "sweetalert2";
import { post_form } from "./post.module.css";
import axios from "axios";

import { baseURL } from "../../baseURL/baseURL";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { JobContext } from "../../Context/JobContext";

const PostJob = () => {
  const navigate = useNavigate();
  const { setIsUpdatingDB } = useContext(JobContext);
  // handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {};
    new FormData(e.currentTarget).forEach((value, key) => {
      formData[key] = value.trim();
    });

    const { companyName, companyLogo, jobTitle, position, description } =
      formData;

    // form validation
    if (companyName.length < 2) {
      Swal.fire({
        icon: "warning",
        title: "Company Name must be at least 2 characters.",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        showCloseButton: true,
      });
      return false;
    }
    if (companyLogo < 12) {
      Swal.fire({
        icon: "warning",
        title: "Company Logo URL must be at least 12 characters.",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        showCloseButton: true,
      });
      return false;
    }
    if (jobTitle.length < 3) {
      Swal.fire({
        icon: "warning",
        title: "Job Title must be at least 3 characters.",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        showCloseButton: true,
      });
      return false;
    }
    if (position.length < 3) {
      Swal.fire({
        icon: "warning",
        title: "Position must be at least 6 characters.",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        showCloseButton: true,
      });
      return false;
    }

    if (description.length < 10) {
      Swal.fire({
        icon: "warning",
        title: "Description must be at least 10 characters.",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        showCloseButton: true,
      });
      return false;
    }

    axios
      .post(baseURL, {
        companyName: companyName,
        logo: companyLogo,
        position: position,
        title: jobTitle,
        id: new Date().getTime(),
        description: description,
      })
      .then(function () {
        Swal.fire({
          position: "top center",
          icon: "success",
          title: "Job Post Succesfully!",
          showConfirmButton: false,
          timer: 1500,
        });

        setIsUpdatingDB((prevState) => !prevState);
        navigate(-1);
      })
      .catch(function () {
        Swal.fire({
          position: "top center",
          icon: "warning",
          title: "Job Post Unsuccessful!",
          showConfirmButton: false,
          timer: 1500,
        });
      });

    e.currentTarget.reset();
  };

  useEffect(() => {
    setIsUpdatingDB((prevState) => !prevState);
  });

  return (
    <section>
      <div className="container">
        <div style={{ paddingTop: "30px" }} className="section__title">
          <span>POST A JOB</span>
          <h2>POST A JOB</h2>
        </div>
        <div className="contact_info_form_container">
          <div className="post_form">
            <div className="container">
              <div></div>
              <div style={{ padding: "50px 0" }}>
                <div className={post_form}>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="companyName">Company Name:</label>
                      <input
                        autoFocus
                        type="text"
                        name="companyName"
                        id="companyName"
                      />
                    </div>
                    <div>
                      <label htmlFor="companyLogo">Company Logo URL:</label>
                      <input type="text" name="companyLogo" id="companyLogo" />
                    </div>
                    <div>
                      <label htmlFor="jobTitle">Job Title:</label>
                      <input type="text" name="jobTitle" id="jobTitle" />
                    </div>

                    <div>
                      <label htmlFor="position">Position:</label>
                      <input type="text" name="position" id="position" />
                    </div>
                    <div>
                      <label htmlFor="description">Description:</label>
                      <textarea
                        name="description"
                        id="description"
                        rows="5"
                      ></textarea>
                    </div>

                    <button type="submit">Post</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostJob;
