export const getApplyJobFromLocalStorage = () => {
  const data = localStorage.getItem("applyJob");

  return data ? JSON.parse(data) : [];
};
