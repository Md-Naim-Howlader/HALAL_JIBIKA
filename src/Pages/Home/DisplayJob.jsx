import ToggleFavJob from "../../utils/ToggleFavJob";
import { FaRegHeart } from "react-icons/fa";

import { FaHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import ToggleApplyJob from "../../utils/ToggleApplyJob";

const DisplayJob = ({ job }) => {
  const { id, title, logo, companyName, position, description } = job;

  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/jobs/${id}`);
  };

  // favorite and apply toggle  jobs

  const { favToggle, handleAddFav, handleRemoveFav } = ToggleFavJob(job);
  const { applyToggle, handleAddApply } = ToggleApplyJob(job);

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
            disabled={applyToggle ? true : false}
            onClick={handleAddApply}
            className="apply__btn"
            title="Apply Now"
          >
            Apply Now
          </button>

          {/* favorite icons start */}

          <button
            onClick={favToggle ? () => handleRemoveFav(id) : handleAddFav}
            className="edit_delete"
          >
            {!favToggle ? (
              <FaRegHeart style={{ color: "red" }} />
            ) : (
              <FaHeart style={{ color: "red" }} />
            )}
          </button>

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
