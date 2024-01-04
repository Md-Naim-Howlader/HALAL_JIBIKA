import { useEffect, useReducer } from "react";
import { JobContext } from "./JobContext";
import initialState from "../reducer/initialState";
import reducer from "../reducer/reducer";
import { addFavorite, removeFavorite, addApply } from "../reducer/actions";

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // set Favorte job for localstorage
  useEffect(() => {
    localStorage.setItem("favJobs", JSON.stringify(state.favJobs));
  }, [state.favJobs]);

  // provided value
  const values = {
    state,
    favJobs: state.favJobs,
    applyedJobs: state.applyedJobs,
    dispatch,
    removeFavorite,
    addFavorite,
    addApply,
  };
  return <JobContext.Provider value={values}>{children}</JobContext.Provider>;
};

export default ContextProvider;
