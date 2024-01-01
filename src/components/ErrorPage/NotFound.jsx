import { useRouteError } from "react-router-dom";
import notFoundImg from "../../assets/image/error404.jpg";
const NotFound = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div style={{ textAlign: "center", padding: "20px 0" }}>
      <img style={{ width: "350px" }} src={notFoundImg} alt="" />
      <h1>Opps!</h1>
      <p style={{ fontSize: "20px" }}>
        Sorry!, an unexpected error has accurred.
      </p>
      <button>Back</button>
    </div>
  );
};

export default NotFound;
