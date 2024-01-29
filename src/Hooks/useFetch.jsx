import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [jobs, setJobs] = useState([]);
  const [filterdJobs, setFilterdJobs] = useState(jobs);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  const fetchData = async (url) => {
    try {
      const data = (await axios.get(url)).data;
      setJobs(data);
      setFilterdJobs(data);
      setIsError(null);
      setIsLoading(false);
    } catch (error) {
      setIsError(error);
      setIsLoading(false);
      setJobs([]);
      setFilterdJobs([]);
    }
  };

  const handleSearch = (searchValue) => {
    let value = searchValue.toLowerCase();

    const newJobs = jobs.filter((job) => {
      const newJob = job.title.toLowerCase();
      return newJob.match(new RegExp(value));
    });
    setFilterdJobs(newJobs);
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);
  console.log(filterdJobs);
  return {
    jobs,
    isLoading,
    isError,
    handleSearch,
    filterdJobs,
  };
};

export default useFetch;
