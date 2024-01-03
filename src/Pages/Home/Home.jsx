import "./home.css";
import DisplayJob from "./DisplayJob";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import NotFound from "../../components/ErrorPage/NotFound";
import { useContext } from "react";
import { JobContext } from "../../Context/JobContext";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.config";

const Home = () => {
  const { data, isError, isLoading } = useContext(JobContext);

  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleExplore = () => {
    if (!user) {
      navigate("/signUp");
    } else {
      navigate("/jobs");
    }
  };
  const handleAllJobs = () => {
    if (!user) {
      navigate("/signUp");
    } else {
      navigate("/jobs");
    }
  };

  return (
    <section className="hero__section">
      <div className="hero__area">
        <div className="container">
          <div className="home__content">
            <h1>
              <span>2,568</span> job available You can choose your dream job
            </h1>
            <p>
              Find great job for build your bright career. Have many job <br />{" "}
              in this plactform.
            </p>
            <div className="explore__more">
              <button onClick={handleExplore}>Explore More...</button>
            </div>
          </div>
        </div>
      </div>
      <div className="latest__jobs">
        <div className="container">
          <div className="section__title">
            <span>Latest Jobs</span>
            <h2>Latest Jobs</h2>
          </div>
          <div className="job__posts">
            {isLoading && <Loading />}
            {isError && <NotFound />}
            {data &&
              data
                .slice(0, 5)
                .map((job) => <DisplayJob key={job.id} job={job} />)}
          </div>
          <div className="explore__btn">
            <button onClick={handleAllJobs}>
              Explore All Jobs{" "}
              <span
                style={{
                  display: "inline-block",
                  marginLeft: "5px",
                }}
              >
                <MdOutlineKeyboardDoubleArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
