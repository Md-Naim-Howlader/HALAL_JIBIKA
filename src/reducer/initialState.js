import { getFavJobFromLocalStorage } from "../utils/getFavJobFromLocalStorage";

const initialState = {
  favJobs: getFavJobFromLocalStorage(),
  applyedJobs: [],
};
export default initialState;
