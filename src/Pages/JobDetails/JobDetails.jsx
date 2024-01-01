import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { job__details } from "./jobDetails.module.css";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const JobDetails = () => {
  const { postId } = useParams();
  const { data } = useFetch(` http://localhost:9000/jobs/${postId}`);
  const { logo, companyName, title, position, description } = data;
  const navigate = useNavigate();
  return (
    <section className={job__details}>
      <button
        onClick={() => navigate(-1)}
        style={{ marginLeft: "20px" }}
        className="btn"
      >
        <FaArrowAltCircleLeft /> Back
      </button>
      <div style={{ paddingTop: "20px" }} className="section__title">
        <span>JOB DETAILS</span>
        <h2>JOB DETAILS</h2>
      </div>

      <div
        className="container post"
        style={{
          background: "#fff",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          padding: "30px",
          borderRadius: "12px",
        }}
      >
        <div className="post__owner_info">
          <img src={logo} alt="Darkento Ltd." />
          <div className="info">
            <h4>{companyName}</h4>
          </div>
        </div>
        <div className="post__body">
          <h3>{title}</h3>
          <span>Job Position: {position}</span>
          <p>{description}</p>
          <p>
            <span>Job Type:</span> Full-time
          </p>
          <p>
            <span>About Us:</span> <br /> Our {companyName} Company is a dynamic
            and growing tech firm dedicated to providing innovative solutions in
            the field of IT Sector . We take pride in our commitment to
            delivering high-quality products and services while fostering a
            collaborative and inclusive work environment.
          </p>
          <p>
            <span>Job Description: </span>
            <br /> We are currently seeking a talented {position}
            {title} to join our passionate team. The ideal candidate will have a
            solid understanding of both front-end and back-end technologies,
            excellent problem-solving skills, and a passion for creating
            seamless and intuitive user experiences.
          </p>
          <p>
            <span>Responsibilities: </span> <br />
            <ul>
              <li>
                Collaborate with cross-functional teams to design, develop, and
                implement new features and enhancements.
              </li>
              <li>
                Write clean, efficient, and maintainable code across the full
                stack.
              </li>
              <li>
                Conduct thorough testing to ensure the reliability and security
                of applications.
              </li>
              <li>
                Stay updated on industry trends and contribute to continuous
                improvement initiatives.
              </li>
              <li>Provide technical support and troubleshooting as needed.</li>
            </ul>
          </p>
          <p>
            <span>Benefits:</span> <br />
            <ul>
              <li>Competitive salary</li>
              <li>Health insurance</li>
              <li>Flexible work hours</li>
              <li>Professional development opportunities</li>
              <li>Collaborative and inclusive work environment</li>
            </ul>
          </p>
          <p>
            <span>How to Apply:</span>
            <br />
            If you are passionate about technology and eager to contribute to a
            dynamic team, please submit your resume and a cover letter detailing
            your relevant experience to {companyName}@gmail.com. Include {title}{" "}
            - [Your Name] in the subject line.
          </p>
          <p>
            <span>Application Deadline: 10/3/2024</span> <br />
            Our {companyName} Company is an equal opportunity employer. We
            encourage candidates from all backgrounds to apply.
          </p>
          <div className="buttons">
            <button
              style={{ padding: "10px 50px" }}
              className="apply__btn"
              title="Apply Now"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
