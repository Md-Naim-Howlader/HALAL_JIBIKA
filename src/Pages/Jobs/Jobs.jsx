import { useContext, useEffect, useState } from "react";
import Job from "./Job";
import "./jobs.css";
import { JobContext } from "../../Context/JobContext";
import NotFound from "../../components/ErrorPage/NotFound";
import Loading from "../../components/Loading/Loading";

const Jobs = () => {
  const { jobs, isLoading, isError } = useContext(JobContext);
  const [updateData, setUpdateData] = useState(jobs);

  useEffect(() => {
    setUpdateData(jobs);
  }, [jobs]);

  return (
    <section>
      <div className="container">
        <div style={{ paddingTop: "50px" }} className="section__title">
          <span>JOBS</span>
          <h2>JOBS</h2>
        </div>
        {isError && <NotFound />}
        {isLoading && <Loading />}
        <div className="job__posts all_jobs">
          {updateData &&
            updateData.map((job) => (
              <Job
                key={job.id}
                job={job}
                updateData={updateData}
                setUpdateData={setUpdateData}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
