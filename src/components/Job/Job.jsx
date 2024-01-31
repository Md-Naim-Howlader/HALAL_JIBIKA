import { FaRegHeart } from "react-icons/fa";

import { FaHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.config";
import ToggleFavJob from "../../utils/ToggleFavJob";
import { deleteJob } from "../../utils/deleteJob";
import { useContext } from "react";
import { JobContext } from "../../Context/JobContext";

const Job = ({ job, setIsUpdatingDB }) => {
  const [user] = useAuthState(auth);
  // destucture job
  const { id, title, logo, companyName, position, description } = job;

  // call jobContext get data
  const { dispatch, addApply, addUpdate } = useContext(JobContext);
  // navigate route
  const navigate = useNavigate();
  const handleDetailsClick = () => {
    navigate(`/jobs/${id}`);
  };
  const { favToggle, handleAddFav, handleRemoveFav } = ToggleFavJob(job);

  // handle delete job
  const handleDeleteJob = (id) => {
    deleteJob(id, setIsUpdatingDB);
  };

  // add apply

  const handleApplyClick = () => {
    addApply(dispatch, job);
    navigate(user ? "/applyJob" : "/login");
  };

  // updatejob
  const handleUpdateJob = () => {
    addUpdate(dispatch, job);
    navigate(user ? "/updateJob" : "/login");
    setIsUpdatingDB((prevState) => !prevState);
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
            <h4>{companyName}</h4>
          </div>
        </div>
        <button
          onClick={handleDetailsClick}
          className="btn"
          title="Show Details"
        >
          Details
        </button>
      </div>
      <div className="post__body">
        <h3>{title}</h3>
        <span>Job Position: {position}</span>
        <p>{description}</p>
        <div className="buttons">
          <button
            onClick={handleApplyClick}
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

export default Job;
