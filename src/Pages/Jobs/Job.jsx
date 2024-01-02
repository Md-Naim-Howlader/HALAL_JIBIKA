import { FaRegHeart } from "react-icons/fa";

import { FaHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { JobContext } from "../../Context/JobContext";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.config";
const Job = ({ job }) => {
  const [isActive, setIsActive] = useState(false);
  const [user] = useAuthState(auth);
  // destucture job
  const { id, title, logo, companyName, position, description } = job;

  // call jobContext get need data
  const { dispatch, addFavorite, removeFavorite } = useContext(JobContext);

  // navigate route
  const navigate = useNavigate();
  const handleDetailsClick = () => {
    navigate(`/jobs/${id}`);
  };

  // handle add favorite job
  const handleAddFavJob = () => {
    setIsActive(!isActive);
    addFavorite(dispatch, job);
  };
  // handle remove favorite job
  const handleRemoveFavJob = (id) => {
    setIsActive(!isActive);
    removeFavorite(dispatch, id);
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
          Show Details
        </button>
      </div>
      <div className="post__body">
        <h3>{title}</h3>
        <span>Job Position: {position}</span>
        <p>{description}</p>
        <div className="buttons">
          <button
            onClick={() => navigate(user ? "/applyJob" : "/signUp")}
            className="apply__btn"
            title="Apply Now"
          >
            Apply Now
          </button>
          {/* favorite icons start */}
          {isActive ? (
            <button
              style={{ color: "red" }}
              onClick={() => handleRemoveFavJob(id)}
              className="edit_delete"
              title="Dislike"
            >
              <FaHeart />
            </button>
          ) : (
            <button
              onClick={handleAddFavJob}
              className="edit_delete"
              title="Favorite"
            >
              <FaRegHeart />
            </button>
          )}
          {/* favorite icons end */}
          <button className="edit_delete" title="Edit">
            <FaEdit />
          </button>
          <button
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
