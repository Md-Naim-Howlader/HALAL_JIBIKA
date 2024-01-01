import useFetch from "../../Hooks/useFetch";
import Job from "./Job";
import "./jobs.css";
const Jobs = () => {
  const { data } = useFetch("http://localhost:9000/jobs");
  return (
    <section>
      <div className="container">
        <div style={{ paddingTop: "50px" }} className="section__title">
          <span>JOBS</span>
          <h2>JOBS</h2>
        </div>
        <div className="job__posts all_jobs">
          {data && data.map((job) => <Job key={job.id} job={job} />)}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
