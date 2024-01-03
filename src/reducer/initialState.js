import { getFavJobFromLocalStorage } from "../utils/getFavJobFromLocalStorage";

const initialState = {
  jobs: [],
  favJobs: getFavJobFromLocalStorage(),
  applyedJobs: [],
};
export default initialState;
