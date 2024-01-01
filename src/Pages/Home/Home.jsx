import "./home.css";
import DisplayJob from "./displayJob";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import useFetch from "../../Hooks/useFetch";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { data } = useFetch("http://localhost:9000/jobs");
  const navigate = useNavigate();
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
              <button>Explore More...</button>
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
            {data &&
              data
                .slice(0, 5)
                .map((job) => <DisplayJob key={job.id} job={job} />)}
          </div>
          <div className="explore__btn">
            <button onClick={() => navigate("/jobs")}>
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
