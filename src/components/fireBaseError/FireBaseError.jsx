import { NavLink, useNavigate } from "react-router-dom";
import errorImage from "../../assets/image/errorImage.avif";
const FireBaseError = (errorMessege) => {
  const naviGate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "20px 0" }}>
      <img style={{ width: "500px" }} src={errorImage} alt="error" />
      <h1 style={{ color: "red" }}>
        Error: {errorMessege.errorMessege.message}
      </h1>
      <button
        onClick={() => naviGate(-1)}
        style={{
          border: "none",
          background: "#2980b9",
          textDecoration: "none",
          color: "#fff",
          fontSize: "17px",
          padding: "9px 15px",
          cursor: "pointer",
          margin: "0 10px",
          borderRadius: "5px",
        }}
      >
        <NavLink style={{ textDecoration: "none", color: "#fff" }}>
          Go Back
        </NavLink>
      </button>
      <button
        style={{
          border: "none",
          background: "#16a085",
          textDecoration: "none",
          color: "#fff",
          fontSize: "17px",
          padding: "9px 15px",
          cursor: "pointer",
          margin: "0 10px",
          borderRadius: "5px",
        }}
      >
        <NavLink style={{ textDecoration: "none", color: "#fff" }} to="/">
          Go Home
        </NavLink>
      </button>
    </div>
  );
};

export default FireBaseError;
