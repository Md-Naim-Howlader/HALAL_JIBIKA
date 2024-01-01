import { MdFavoriteBorder } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const { id, title, logo, companyName, position, description } = job;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/jobs/${id}`);
  };
  return (
    <div onClick={handleClick} className="post" title="Show Details">
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
        <div className="buttons">
          <button className="apply__btn" title="Apply Now">
            Apply Now
          </button>

          <button className="edit_delete" title="Favorite">
            <MdFavoriteBorder />
          </button>
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
