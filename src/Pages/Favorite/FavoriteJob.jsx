import { useContext } from "react";
import { JobContext } from "../../Context/JobContext";
import Favorite from "./Favorite";

const FavoriteJob = () => {
  const { data } = useContext(JobContext);
  return (
    <section className="container">
      <div style={{ paddingTop: "50px" }} className="section__title">
        <span>FAVORITE JOBS</span>
        <h2>FAVORITE JOBS</h2>
      </div>
      <div className="job__posts" style={{ padding: "50px" }}>
        {data &&
          data
            .filter((dta) => dta.isFavorite === true)
            .map((fav) => <Favorite key={fav.id} fav={fav} />)}
      </div>
    </section>
  );
};

export default FavoriteJob;
