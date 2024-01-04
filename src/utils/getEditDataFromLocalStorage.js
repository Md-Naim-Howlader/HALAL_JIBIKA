export const getEditDataFromLocalStorage = () => {
  const data = localStorage.getItem("editData");

  return data ? JSON.parse(data) : [];
};
