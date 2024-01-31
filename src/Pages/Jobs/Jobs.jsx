import { useContext } from "react";
import Job from "../../components/Job/Job";
import "./jobs.css";
import { JobContext } from "../../Context/JobContext";
import NotFound from "../../components/ErrorPage/NotFound";
import Loading from "../../components/Loading/Loading";
import SearchJobs from "../Search_jobs/SearchJobs";
import searchImg from "../../assets/image/search_not_found.jpg";
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

        {filterdJobs.length > 0 ? (
          <div className="job__posts all_jobs">
            {filterdJobs &&
              filterdJobs.map((job) => (
                <Job setIsUpdatingDB={setIsUpdatingDB} key={job.id} job={job} />
              ))}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <img
              style={{ maxWidth: "250px" }}
              src={searchImg}
              alt="search dont match image"
            />
            <h1>Search Don&apos;t Match</h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default Jobs;
