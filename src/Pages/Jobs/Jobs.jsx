import { useEffect, useState } from "react";
import Job from "./Job";
import "./jobs.css";

import { useLoaderData } from "react-router-dom";

const Jobs = () => {
  const data = useLoaderData();
  const [updateData, setUpdateData] = useState(data);

  useEffect(() => {
    setUpdateData(data);
  }, [data]);

  return (
    <section>
      <div className="container">
        <div style={{ paddingTop: "50px" }} className="section__title">
          <span>JOBS</span>
          <h2>JOBS</h2>
        </div>
        <div className="job__posts all_jobs">
          {data &&
            data.map((job) => (
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
