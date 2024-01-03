import { useContext } from "react";
import { JobContext } from "../../Context/JobContext";

import Apply from "./Apply";
const ApplyJob = () => {
  const { applyedJobs } = useContext(JobContext);

  return (
    <div>
      <div style={{ paddingTop: "30px" }} className="section__title">
        <span>APPLYED JOB</span>
        <h2>APPLYED JOB</h2>
      </div>
      <div style={{ padding: "30px 0" }} className="job__posts container">
        {applyedJobs &&
          applyedJobs.map((job) => <Apply key={job.id} job={job} />)}
      </div>
    </div>
  );
};

export default ApplyJob;
