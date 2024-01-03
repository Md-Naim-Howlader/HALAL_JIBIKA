import { useEffect, useReducer } from "react";
import { JobContext } from "./JobContext";

import initialState from "../reducer/initialState";

import useFetch from "../Hooks/useFetch";
import { baseURL } from "../baseURL/baseURL";
import reducer from "../reducer/reducer";
import {
  addFavorite,
  removeFavorite,
  addJobs,
  deleteJobs,
  addApply,
  deleteApply,
} from "../reducer/actions";

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // call api from custom hook
  const { data, isError, isLoading } = useFetch(baseURL);

  // set Favorte job for localstorage
  useEffect(() => {
    localStorage.setItem("favJobs", JSON.stringify(state.favJobs));
  }, [state.favJobs]);
  const values = {
    state,
    favJobs: state.favJobs,
    applyedJobs: state.applyedJobs,
    data,
    isError,
    isLoading,
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
