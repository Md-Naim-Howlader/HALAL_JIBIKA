import { useContext } from "react";
import { JobContext } from "../../Context/JobContext";
import Favorite from "./Favorite";
import notFavorate from "../../assets/image/No_Heart_Icon.png";
const FavoriteJob = () => {
  const { favJobs } = useContext(JobContext);

  return (
    <section className="container">
      <div className="section__title fabjobs">
        <span>FAVORITE JOBS</span>
        <h2>FAVORITE JOBS</h2>
      </div>
      {favJobs.length > 0 ? (
        <div className="job__posts" style={{ padding: "50px" }}>
          {favJobs.map((fav) => (
            <Favorite key={fav.id} fav={fav} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: "80px 0" }}>
          <h2>No Favorite added yet!</h2>
          <img style={{ width: "200px" }} src={notFavorate} alt="no favorate" />
        </div>
      )}
    </section>
  );
};

export default FavoriteJob;
