import { useNavigate } from "react-router-dom";
import notFoundImg from "../../assets/image/error404.svg";
import { goBack, notFoundContainer } from "./error.module.css";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className={notFoundContainer}>
      <img src={notFoundImg} alt="" />
      <h1>Opps!</h1>
      <p>Sorry!, an unexpected error has accurred.</p>
      <button className={goBack} onClick={() => navigate(-1)}>
        Go back
      </button>
    </div>
  );
};

export default NotFound;
