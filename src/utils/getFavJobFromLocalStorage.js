export const getFavJobFromLocalStorage = () => {
  const data = localStorage.getItem("favJobs");

  return data ? JSON.parse(data) : [];
};
