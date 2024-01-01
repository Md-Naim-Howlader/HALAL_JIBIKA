import "./about.css";
const About = () => {
  return (
    <section className="about__section">
      <div>
        <div className="container">
          <div style={{ paddingTop: "50px" }} className="section__title">
            <span>ABOUT US</span>
            <h2>ABOUT US</h2>
          </div>
          <div className="mission">
            <p>Our mission:</p>
            <h1>
              WE ACTIVELY <br /> CONNECT PEOPLE TO THEIR NEXT GREAT OPPORTUNITY.
            </h1>
          </div>
        </div>
        <div className="achivements__area">
          <div className="container">
            <p>
              What started as a way to help small businesses find great
              candidates has grown into a leading online employment marketplace
              that connects millions of job seekers with companies of all sizes.
            </p>
            <div className="achivements ">
              <div className="achivement">
                <h2>#1</h2>
                <p>rated job search app on iOS and Android</p>
              </div>
              <div className="achivement">
                <h2>162M+</h2>
                <p>job seekers have used HALAL JIBIKA</p>
              </div>
              <div className="achivement">
                <h2>3.8M+</h2>
                <p>businesses have used HALAL JIBIKA</p>
              </div>
              <div className="achivement">
                <h2>#1</h2>
                <p>rated hiring site in the U.S.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
