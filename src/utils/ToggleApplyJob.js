import { useContext, useState } from "react";
import { JobContext } from "../Context/JobContext";

const ToggleApplyJob = (job) => {
  const { dispatch, addApply, deleteApply, applyedJobs } =
    useContext(JobContext);
  const status = applyedJobs.some((item) => item.id === job.id);
  const [applyToggle, setToggle] = useState(status);

  const handleAddApply = () => {
    setToggle(true);
    addApply(dispatch, job);
  };
  const handleRemoveApply = (id) => {
    deleteApply(dispatch, id);
    setToggle(false);
  };

  return {
    applyToggle,
    handleAddApply,
    handleRemoveApply,
  };
};

export default ToggleApplyJob;
