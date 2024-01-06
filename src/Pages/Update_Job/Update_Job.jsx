import { useContext, useState } from "react";
import { JobContext } from "../../Context/JobContext";
import { update_form } from "./updateJob.module.css";
import axios from "axios";
import { baseURL } from "../../baseURL/baseURL";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const Update_Job = () => {
  const navigate = useNavigate();
  // get editJob using context api
  const { editJob, setIsUpdatingDB } = useContext(JobContext);

  // destucture editjob
  const { id, title, logo, companyName, position, description } = editJob[0];

  // state declere
  let [company, setCompany] = useState(companyName);
  let [companyLogo, setCompanyLogo] = useState(logo);
  let [jobTitle, setJobTitle] = useState(title);
  let [jobPosition, setJobPosition] = useState(position);
  let [jobDescription, setDescription] = useState(description);

  // onchange handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "companyName":
        setCompany(value);
        break;
      case "companyLogo":
        setCompanyLogo(value);
        break;
      case "jobTitle":
        setJobTitle(value);
        break;
      case "position":
        setJobPosition(value);
        break;
      case "description":
        setDescription(value);
        break;
      default:
        break;
    }
  };

  // submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    let newUpdateJob = {
      title: jobTitle,
      companyName: company,
      logo: companyLogo,
      position: jobPosition,
      description: jobDescription,
    };

    try {
      await axios.put(`${baseURL}/${id}`, newUpdateJob);

      Swal.fire({
        position: "top center",
        icon: "success",
        title: "Your Job has been Updated",
        showConfirmButton: false,
        timer: 1500,
      });

      setCompany("");
      setCompanyLogo("");
      setJobTitle("");
      setJobPosition("");
      setDescription("");
      setIsUpdatingDB((prevState) => !prevState);
      navigate(-1);
    } catch (error) {
      Swal.fire({
        position: "top center",
        icon: "warning",
        title: "Job Update Unsuccessful",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <section>
      <div className="container">
        <div style={{ paddingTop: "30px" }} className="section__title">
          <span>UPDATE A JOB</span>
          <h2>UPDATE A JOB</h2>
        </div>
        <div className="contact_info_form_container">
          <div className="update_form">
            <div className="container">
              <div></div>
              <div style={{ padding: "50px 0" }}>
                <div className={update_form}>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="companyName">Company Name:</label>
                      <input
                        autoFocus
                        onChange={handleChange}
                        value={company}
                        type="text"
                        name="companyName"
                        id="companyName"
                      />
                    </div>
                    <div>
                      <label htmlFor="companyLogo">Company Logo URL:</label>
                      <input
                        onChange={handleChange}
                        value={companyLogo}
                        type="text"
                        name="companyLogo"
                        id="companyLogo"
                      />
                    </div>
                    <div>
                      <label htmlFor="jobTitle">Job Title:</label>
                      <input
                        value={jobTitle}
                        onChange={handleChange}
                        type="text"
                        name="jobTitle"
                        id="jobTitle"
                      />
                    </div>

                    <div>
                      <label htmlFor="position">Position:</label>
                      <input
                        value={jobPosition}
                        onChange={handleChange}
                        type="text"
                        name="position"
                        id="position"
                      />
                    </div>
                    <div>
                      <label htmlFor="description">Description:</label>
                      <textarea
                        value={jobDescription}
                        onChange={handleChange}
                        name="description"
                        id="description"
                        rows="5"
                      ></textarea>
                    </div>

                    <button type="submit">Update Job</button>
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

export default Update_Job;
