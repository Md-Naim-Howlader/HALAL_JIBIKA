import ToggleFavJob from "../../utils/ToggleFavJob";
import { FaRegHeart } from "react-icons/fa";

import { FaHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import auth from "../../firebase/firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import { deleteJob } from "../../utils/deleteJob";
import { useContext } from "react";
import { JobContext } from "../../Context/JobContext";

const DisplayJob = ({ job, data, setData }) => {
  const { id, title, logo, companyName, position, description } = job;
  const { dispatch, addApply, addUpdate } = useContext(JobContext);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/jobs/${id}`);
  };

  // favorite and apply toggle  jobs

  const { favToggle, handleAddFav, handleRemoveFav } = ToggleFavJob(job);

  const handleDeleteJob = (id) => {
    deleteJob(id, data, setData);
  };
  //handle Apply job

  const handleApplyJob = () => {
    addApply(dispatch, job);
    navigate(user ? "/applyJob" : "/signUp");
  };

  // handle update job
  const handleUpdateJob = () => {
    addUpdate(dispatch, job);
    navigate(user ? "/updateJob" : "/signUp");
  };
  return (
    <div className="post">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="post__owner_info">
          <img src={logo} alt="Darkento Ltd." />
          <div className="info">
            <h4>Company Name: {companyName}</h4>
          </div>
        </div>
        <button
          onClick={() => handleClick(id)}
          title="Show Details"
          className="btn"
        >
          Show Details
        </button>
      </div>
      <div className="post__body">
        <h3>{title}</h3>
        <span>Job Position: {position}</span>
        <p>{description}</p>
        <div className="buttons">
          <button
            onClick={handleApplyJob}
            className="apply__btn"
            title="Apply Now"
          >
            Apply Now
          </button>

          {/* favorite icons start */}

          <button
            onClick={favToggle ? () => handleRemoveFav(id) : handleAddFav}
            style={{ color: "#d63031" }}
            className="edit_delete"
          >
            {!favToggle ? <FaRegHeart /> : <FaHeart />}
          </button>

          {/* favorite icons end */}
          <button
            onClick={handleUpdateJob}
            className="edit_delete"
            title="Edit"
          >
            <FaEdit />
          </button>
          <button
            onClick={() => handleDeleteJob(id)}
            style={{ color: "#DC3545" }}
            className="edit_delete"
            title="Delete"
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayJob;
