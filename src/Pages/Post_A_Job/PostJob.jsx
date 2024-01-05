import Swal from "sweetalert2";
import { post_form } from "./post.module.css";
import axios from "axios";

import { baseURL } from "../../baseURL/baseURL";
import { useNavigate } from "react-router-dom";

const PostJob = () => {
  const navigate = useNavigate();
  // handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const companyName = e.target.companyName.value.trim();
    const companyLogo = e.target.companyLogo.value.trim();
    const jobTitle = e.target.jobTitle.value.trim();
    const position = e.target.position.value.trim();
    const description = e.target.description.value.trim();

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
        title: "Description must be at least 3 characters.",
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
          icon: "success",
          title: "Job Post Successfully",
          toast: true,
          position: "top center",
          showConfirmButton: false,
          timer: 2000,
          showCloseButton: true,
        });
        navigate(-1);
      })
      .catch(function (err) {
        console.log(err);
        Swal.fire({
          icon: "warning",
          title: "Job Post Unsuccessful!",
          toast: true,
          position: "top center",
          showConfirmButton: false,
          timer: 2000,
          showCloseButton: true,
        });
      });

    e.target.companyName.value = "";
    e.target.companyLogo.value = "";
    e.target.jobTitle.value = "";
    e.target.position.value = "";
    e.target.description.value = "";
  };

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
