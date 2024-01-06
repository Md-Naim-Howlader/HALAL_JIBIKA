import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const [isUpdatingDB, setIsUpdatingDB] = useState(false);

  const fetchData = async (url) => {
    try {
      const data = (await axios.get(url)).data;
      setJobs(data);
      setIsError(null);
      setIsLoading(false);
    } catch (error) {
      setIsError(error);
      setIsLoading(false);
      setJobs([]);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url, isUpdatingDB]);
  return {
    jobs,
    isLoading,
    isError,
    setIsUpdatingDB,
  };
};

export default useFetch;
