import { MdDelete } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

import { FaHeart } from "react-icons/fa";
const Favorite = ({ fav }) => {
  const { isFavorite, title, logo, companyName, position, description } = fav;
  return (
    <div>
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
          <button className="btn" title="Show Details">
            Show Details
          </button>
        </div>
        <div className="post__body">
          <h3>{title}</h3>
          <span>Job Position: {position}</span>
          <p>{description}</p>
          <div className="buttons">
            <button className="apply__btn" title="Apply Now">
              Apply Now
            </button>
            {/* favorite icons start */}
            {isFavorite ? (
              <button
                style={{ color: "red" }}
                className="edit_delete"
                title="Dislike"
              >
                <FaHeart />
              </button>
            ) : (
              <button className="edit_delete" title="Favorite">
                <FaRegHeart />
              </button>
            )}
            {/* favorite icons end */}
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
    </div>
  );
};

export default Favorite;
