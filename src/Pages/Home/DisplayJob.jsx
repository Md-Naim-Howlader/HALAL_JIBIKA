import { FaRegHeart } from "react-icons/fa";

import { FaHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.config";
import { useContext } from "react";
import { JobContext } from "../../Context/JobContext";

const DisplayJob = ({ job }) => {
  const { isFavorite, id, title, logo, companyName, position, description } =
    job;

  const { dispatch, addFavorite, removeFavorite } = useContext(JobContext);

  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/jobs/${id}`);
  };

  // handle add favorite job
  const handleAddFav = (id) => {
    // AddFavorite(`http://localhost:9000/jobs/${id}`, job, true);
    const obj = {
      url: `http://localhost:9000/jobs/${id}`,
      status: true,
    };
    addFavorite(dispatch, obj);
  };
  // handle remove favorite job
  const handleRemoveFav = (id) => {
    // AddFavorite(`http://localhost:9000/ jobs/${id}`, job, false);
    const obj = {
      url: `http://localhost:9000/jobs/${id}`,
      status: false,
    };
    removeFavorite(dispatch, obj);
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
            onClick={() => navigate(user ? "/applyJob" : "/signUp")}
            className="apply__btn"
            title="Apply Now"
          >
            Apply Now
          </button>

          {/* favorite icons start */}
          {isFavorite ? (
            <button
              style={{ color: "red" }}
              onClick={() => handleRemoveFav(id)}
              className="edit_delete"
              title="Dislike"
            >
              <FaHeart />
            </button>
          ) : (
            <button
              onClick={() => handleAddFav(id, job)}
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

export default DisplayJob;
