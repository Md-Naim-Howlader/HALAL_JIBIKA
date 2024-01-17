import { useContext } from "react";
import { applyed__form } from "./applyJob.module.css";
import { JobContext } from "../../Context/JobContext";
import Swal from "sweetalert2";

const ApplyJob = () => {
  const { applyedJobs } = useContext(JobContext);

  const { title, logo, companyName, position } = applyedJobs[0]
    ? applyedJobs[0]
    : {
        title: "",
        logo: "",
        companyName: "",
        position: "",
      };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;

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
    if (photoURL.length < 12) {
      Swal.fire({
        icon: "warning",
        title: "Photo URL must be at least 12 characters.",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        showCloseButton: true,
      });
      return false;
    }

    Swal.fire({
      icon: "success",
      title: "Apply has been Submited",
      toast: true,
      position: "top center",
      showConfirmButton: false,
      timer: 2000,
      showCloseButton: true,
    });

    e.target.name.value = "";
    e.target.email.value = "";
    e.target.photoURL.value = "";
  };
  return (
    <div>
      <div style={{ paddingTop: "30px" }} className="section__title">
        <span>JOB APPLY FORM</span>
        <h2>JOB APPLY FORM</h2>
      </div>
      <div style={{ padding: "20px 0" }}>
        <div className={applyed__form}>
          <div>
            <div className="post__owner_info">
              <img src={logo} alt="company Logo" />
              <h3>{companyName}</h3>
            </div>
            <div className="post__body">
              <h3>{title}</h3>
              <span>Position:{position}</span>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Canditate name:</label>
              <input autoFocus type="text" name="name" id="name" />
            </div>
            <div>
              <label htmlFor="email">Canditate email address:</label>
              <input type="email" name="email" id="email" />
            </div>
            <div>
              <label htmlFor="photoURL">Photo URL:</label>
              <input type="text" name="photoURL" id="photoURL" />
            </div>
            <div>
              <label htmlFor="jobCategory">Job Category:</label>
              <input
                type="text"
                readOnly
                value={title}
                name="jobCategory"
                id="jobCategory"
              />
            </div>
            <div>
              <label htmlFor="jobPosition">Job Position:</label>
              <input
                type="text"
                readOnly
                value={position}
                name="jobPosition"
                id="jobPosition"
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyJob;
