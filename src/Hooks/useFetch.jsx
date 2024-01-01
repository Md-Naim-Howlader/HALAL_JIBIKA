import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  const fetchData = async (url) => {
    try {
      const data = (await axios.get(url)).data;
      setData(data);
      setIsError(null);
      setIsLoading(false);
    } catch (error) {
      setIsError(error);
      setIsLoading(false);
      setData([]);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);
  return {
    data,
    isLoading,
    isError,
  };
};

export default useFetch;
