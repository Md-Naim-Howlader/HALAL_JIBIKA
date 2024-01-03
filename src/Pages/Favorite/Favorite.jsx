import { MdDelete } from "react-icons/md";
import ToggleFavJob from "../../utils/ToggleFavJob";
const Favorite = ({ fav }) => {
  const { id, title, logo, companyName, position, description } = fav;
  const { favToggle, handleRemoveFav } = ToggleFavJob(fav);

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

            <button
              style={{ color: "#DC3545" }}
              className="edit_delete"
              title="Delete"
              onClick={favToggle ? () => handleRemoveFav(id) : ""}
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
