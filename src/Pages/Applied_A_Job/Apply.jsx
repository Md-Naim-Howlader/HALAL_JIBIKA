import { MdDelete } from "react-icons/md";

const Apply = ({ job }) => {
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
          <img src="" alt="Darkento Ltd." />
          <div className="info">
            <h4>{job.companyName}</h4>
          </div>
        </div>
        <button
          // onClick={handleDetailsClick}
          className="btn"
          title="Show Details"
        >
          Show Details
        </button>
      </div>
      <div className="post__body">
        <h3>{job.title}</h3>
        <span>Job Position: {job.position}</span>
        <p>{job.description}</p>
        <div className="buttons">
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

export default Apply;
