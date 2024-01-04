import { useEffect, useReducer } from "react";
import { JobContext } from "./JobContext";
import initialState from "../reducer/initialState";
import reducer from "../reducer/reducer";
import {
  addFavorite,
  removeFavorite,
  addApply,
  addUpdate,
} from "../reducer/actions";

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // set Favorte job for localstorage
  useEffect(() => {
    localStorage.setItem("favJobs", JSON.stringify(state.favJobs));
  }, [state.favJobs]);
  // set apply job for localstorage
  useEffect(() => {
    localStorage.setItem("applyJob", JSON.stringify(state.applyedJobs));
  }, [state.applyedJobs]);

  // set edit data for localStorage
  useEffect(() => {
    localStorage.setItem("editData", JSON.stringify(state.editedJob));
  }, [state.editedJob]);
  // provided value
  const values = {
    state,
    favJobs: state.favJobs,
    applyedJobs: state.applyedJobs,
    editJob: state.editedJob,
    dispatch,
    removeFavorite,
    addFavorite,
    addApply,
    addUpdate,
  };
  return <JobContext.Provider value={values}>{children}</JobContext.Provider>;
};

export default ContextProvider;
