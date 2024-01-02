import { useContext } from "react";
import NotFound from "../../components/ErrorPage/NotFound";
import Loading from "../../components/Loading/Loading";
import Job from "./Job";
import "./jobs.css";
import { JobContext } from "../../Context/JobContext";

const Jobs = () => {
  const { data, isLoading, isError } = useContext(JobContext);

  return (
    <section>
      <div className="container">
        <div style={{ paddingTop: "50px" }} className="section__title">
          <span>JOBS</span>
          <h2>JOBS</h2>
        </div>
        <div className="job__posts all_jobs">
          {isLoading && <Loading />}
          {isError && <NotFound />}

          {data && data.map((job) => <Job key={job.id} job={job} />)}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
