import { useReducer } from "react";
import { JobContext } from "./JobContext";
import reducer from "../reducer/reducer";
import initialState from "../reducer/initialState";

import useFetch from "../Hooks/useFetch";
import { baseURL } from "../baseURL/baseURL";

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // call api from custom hook
  const { data, isError, isLoading } = useFetch(baseURL);

  // all passed values
  const values = {
    state,
    data,
    isError,
    isLoading,
    dispatch,
  };
  return <JobContext.Provider value={values}>{children}</JobContext.Provider>;
};

export default ContextProvider;
