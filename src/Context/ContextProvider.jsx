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
import useFetch from "../Hooks/useFetch";
import { baseURL } from "../baseURL/baseURL";

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // get data
  const {
    handleSearch,
    filterdJobs,
    jobs,
    isError,
    isLoading,
    setIsUpdatingDB,
  } = useFetch(baseURL);
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
    jobs,
    isError,
    isLoading,
    favJobs: state.favJobs,
    applyedJobs: state.applyedJobs,
    editJob: state.editedJob,
    dispatch,
    removeFavorite,
    addFavorite,
    addApply,
    addUpdate,
    setIsUpdatingDB,
    handleSearch,
    filterdJobs,
  };
  return <JobContext.Provider value={values}>{children}</JobContext.Provider>;
};

export default ContextProvider;
