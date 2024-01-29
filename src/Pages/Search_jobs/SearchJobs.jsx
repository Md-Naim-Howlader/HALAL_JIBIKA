import { useContext, useEffect, useState } from "react";
import { searchContainer } from "./search.module.css";
import { JobContext } from "../../Context/JobContext";
const SearchJobs = () => {
  const [searchText, setSearchText] = useState("");
  const { handleSearch } = useContext(JobContext);
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  useEffect(() => {
    handleSearch(searchText);
  }, [searchText]);
  return (
    <div className={searchContainer}>
      <input
        onChange={handleChange}
        value={searchText}
        type="text"
        placeholder="What position are you looking for ?"
      />
    </div>
  );
};

export default SearchJobs;
