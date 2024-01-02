import "./loading.css";
const Loading = () => {
  return (
    <div
      style={{ textAlign: "center", padding: "170px 0" }}
      className="container loading"
    >
      <div className="lds-dual-ring"></div>

      <h3>Loading...</h3>
    </div>
  );
};

export default Loading;
