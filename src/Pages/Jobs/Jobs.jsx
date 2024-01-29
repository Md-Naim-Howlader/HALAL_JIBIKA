import { useContext } from "react";
import Job from "../../components/Job/Job";
import "./jobs.css";
import { JobContext } from "../../Context/JobContext";
import NotFound from "../../components/ErrorPage/NotFound";
import Loading from "../../components/Loading/Loading";
import SearchJobs from "../Search_jobs/SearchJobs";

const Jobs = () => {
  const { filterdJobs, isLoading, isError, setIsUpdatingDB } =
    useContext(JobContext);

  return (
    <section>
      <div className="container">
        <div style={{ paddingTop: "50px" }} className="section__title">
          <span>JOBS</span>
          <h2>JOBS</h2>
        </div>
        <SearchJobs />
        {isError && <NotFound />}
        {isLoading && <Loading />}

        <div className="job__posts all_jobs">
          {filterdJobs &&
            filterdJobs.map((job) => (
              <Job setIsUpdatingDB={setIsUpdatingDB} key={job.id} job={job} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
