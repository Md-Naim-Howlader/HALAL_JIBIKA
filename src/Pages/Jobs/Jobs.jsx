import { useContext } from "react";
import Job from "../../components/Job/Job";
import "./jobs.css";
import { JobContext } from "../../Context/JobContext";
import NotFound from "../../components/ErrorPage/NotFound";
import Loading from "../../components/Loading/Loading";

const Jobs = () => {
  const { jobs, isLoading, isError, setIsUpdatingDB } = useContext(JobContext);

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
          {jobs &&
            jobs.map((job) => (
              <Job setIsUpdatingDB={setIsUpdatingDB} key={job.id} job={job} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
