import { useEffect, useReducer } from "react";
import { JobContext } from "./JobContext";
import initialState from "../reducer/initialState";
import reducer from "../reducer/reducer";
import {
  addFavorite,
  removeFavorite,
  addJobs,
  deleteJobs,
  addApply,
  deleteApply,
} from "../reducer/actions";
import useFetch from "../Hooks/useFetch";
import { baseURL } from "../baseURL/baseURL";

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data } = useFetch(baseURL);
  // set Favorte job for localstorage
  useEffect(() => {
    localStorage.setItem("favJobs", JSON.stringify(state.favJobs));
  }, [state.favJobs]);
  const values = {
    state,
    data,
    favJobs: state.favJobs,
    applyedJobs: state.applyedJobs,
    dispatch,
    removeFavorite,
    addFavorite,
    addJobs,
    deleteJobs,
    addApply,
    deleteApply,
  };
  return <JobContext.Provider value={values}>{children}</JobContext.Provider>;
};

export default ContextProvider;
