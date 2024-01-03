import { useContext, useState } from "react";
import { JobContext } from "../Context/JobContext";

const ToggleFavJob = (job) => {
  const { dispatch, addFavorite, removeFavorite, favJobs } =
    useContext(JobContext);
  const status = favJobs.some((item) => item.id === job.id);
  const [favToggle, setToggle] = useState(status);
  const handleAddFav = () => {
    setToggle(true);
    addFavorite(dispatch, job);
  };
  const handleRemoveFav = (id) => {
    setToggle(false);
    removeFavorite(dispatch, id);
  };

  return {
    favToggle,
    handleAddFav,
    handleRemoveFav,
  };
};

export default ToggleFavJob;
